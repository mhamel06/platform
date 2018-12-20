import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import {
  LoginPageActions,
  AuthActions,
  AuthApiActions,
} from '@example-app/auth/actions';
import { Credentials } from '@example-app/auth/models/user';
import { AuthService } from '@example-app/auth/services/auth.service';
import { LogoutConfirmationDialogComponent } from '@example-app/auth/components/logout-confirmation-dialog.component';

@Injectable()
export class AuthEffects {
  @Effect()
  login$ = this.actions$.pipe(
    ofType(LoginPageActions.LOGIN),
    map(action => action.payload.credentials),
    exhaustMap((auth: Credentials) =>
      this.authService.login(auth).pipe(
        map(user => AuthApiActions.Actions.loginSuccess({ user })),
        catchError(error => of(AuthApiActions.Actions.loginFailure({ error })))
      )
    )
  );

  @Effect({ dispatch: false })
  loginSuccess$ = this.actions$.pipe(
    ofType(AuthApiActions.AuthApiActionTypes.LoginSuccess),
    tap(() => this.router.navigate(['/']))
  );

  @Effect({ dispatch: false })
  loginRedirect$ = this.actions$.pipe(
    ofType(AuthApiActions.AuthApiActionTypes.LoginRedirect, AuthActions.LOGOUT),
    tap(authed => {
      this.router.navigate(['/login']);
    })
  );

  @Effect()
  logoutConfirmation$ = this.actions$.pipe(
    ofType(AuthActions.LOGOUT_CONFIRMATION),
    exhaustMap(() => {
      const dialogRef = this.dialog.open<
        LogoutConfirmationDialogComponent,
        undefined,
        boolean
      >(LogoutConfirmationDialogComponent);

      return dialogRef.afterClosed();
    }),
    map(result =>
      result
        ? AuthActions.Actions.logout()
        : AuthActions.Actions.logoutConfirmationDismiss()
    )
  );

  constructor(
    private actions$: Actions<LoginPageActions.Actions>,
    private authService: AuthService,
    private router: Router,
    private dialog: MatDialog
  ) {}
}
