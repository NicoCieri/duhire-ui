import axios from 'axios';

export const AUTHENTICATING = 'authenticating_user';
export const AUTHENTICATED = 'authenticated_user';
export const UNAUTHENTICATED = 'unauthenticated_user';
export const AUTHENTICATION_ERROR = 'authentication_error';

const URL = 'http://138.197.51.153:8080';

export function signInAction({ username, password }, history) {
  return async (dispatch) => {
    dispatch({ type: AUTHENTICATING });

    // TODO: Finish real Auth
    try {
      // const res = await axios.post(`${URL}/oauth/token`, {
      //   username: 'seebogado@gmail.com',
      //   password: 'password',
      //   grant_type: 'password',
      // }, {
      //   headers: {
      //     'Content-Type': 'application/json',
      //     Authorization: 'Basic d2ViX2FwcDo=',
      //   },
      // })
      const res = {
        access_token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MjQ3NjAxMTAsInVzZXJfbmFtZSI6InNlZWJvZ2Fkb0BnbWFpbC5jb20iLCJhdXRob3JpdGllcyI6WyJDUkVBVEVfQURNSU4iLCJDUkVBVEVfVEVDSF9TS0lMTCIsIlJFQURfVVNFUlMiLCJDUkVBVEVfU09GVF9TS0lMTCIsIkRFTEVURV9TRUNUT1JfU0tJTEwiLCJDUkVBVEVfUkVDUlVJVEVSIiwiREVMRVRFX0NMSUVOVCIsIkRFTEVURV9TT0ZUX1NLSUxMIiwiQ1JFQVRFX0NPVU5UUlkiLCJDUkVBVEVfQVJFQV9TS0lMTCIsIkRFTEVURV9BRE1JTiIsIlVQREFURV9TRUFSQ0giLCJVUERBVEVfQ09VTlRSWSIsIkNSRUFURV9TRUFSQ0giLCJDUkVBVEVfQ0xJRU5UIiwiVVBEQVRFX1RFQ0hfU0tJTEwiLCJERUxFVEVfUkVDUlVJVEVSIiwiVVBEQVRFX1NFQ1RPUl9TS0lMTCIsIlVQREFURV9DTElFTlQiLCJVUERBVEVfUkVDUlVJVEVSIiwiVVBEQVRFX0FETUlOIiwiVVBEQVRFX0FSRUFfU0tJTEwiLCJERUxFVEVfQVJFQV9TS0lMTCIsIkRFTEVURV9URUNIX1NLSUxMIiwiQ1JFQVRFX1NFQ1RPUl9TS0lMTCIsIkRFTEVURV9DT1VOVFJZIiwiVVBEQVRFX1NPRlRfU0tJTEwiLCJERUxFVEVfU0VBUkNIIl0sImp0aSI6IjRjZTZjYjliLTU2NTItNDM5Yi05YzMwLTAwYzMyYjkyZmY2YyIsImNsaWVudF9pZCI6IndlYl9hcHAiLCJzY29wZSI6WyJGT08iXX0.AMVTSJ3ksiqTmqPPJzmNbjEthwLtEpjgkQExnd25yDRdKb-fXrgDfac1UGGw35si_hz4RlaEOtayL1-ElBnvWtXWigWjPQUNQqjqSQNNtOaThb1LLiST2jkanjQ_OVyD6V0kKmpZOY4zoT4wzveLKC-xHasNu4cozSHx73gELoGZVN0jTkjgIhuk-U30rwbIdAlSUFgWofjYLQQGi0vpj8_JFFTYK7xrsscYijmXvZLzO4aeCG37G9yIJUi1ZLJA3XIpt-MB32l9NKLYPwlWKb5WwD9OPKCKidpt0WJQOfkZuwALB04ihtJISucEVmbO8h-ZojJA1hVAIO1Sx7R8Hg',
        token_type: 'bearer',
        refresh_token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJzZWVib2dhZG9AZ21haWwuY29tIiwic2NvcGUiOlsiRk9PIl0sImF0aSI6IjRjZTZjYjliLTU2NTItNDM5Yi05YzMwLTAwYzMyYjkyZmY2YyIsImV4cCI6MTUyNzMwODkxMCwiYXV0aG9yaXRpZXMiOlsiQ1JFQVRFX0FETUlOIiwiQ1JFQVRFX1RFQ0hfU0tJTEwiLCJSRUFEX1VTRVJTIiwiQ1JFQVRFX1NPRlRfU0tJTEwiLCJERUxFVEVfU0VDVE9SX1NLSUxMIiwiQ1JFQVRFX1JFQ1JVSVRFUiIsIkRFTEVURV9DTElFTlQiLCJERUxFVEVfU09GVF9TS0lMTCIsIkNSRUFURV9DT1VOVFJZIiwiQ1JFQVRFX0FSRUFfU0tJTEwiLCJERUxFVEVfQURNSU4iLCJVUERBVEVfU0VBUkNIIiwiVVBEQVRFX0NPVU5UUlkiLCJDUkVBVEVfU0VBUkNIIiwiQ1JFQVRFX0NMSUVOVCIsIlVQREFURV9URUNIX1NLSUxMIiwiREVMRVRFX1JFQ1JVSVRFUiIsIlVQREFURV9TRUNUT1JfU0tJTEwiLCJVUERBVEVfQ0xJRU5UIiwiVVBEQVRFX1JFQ1JVSVRFUiIsIlVQREFURV9BRE1JTiIsIlVQREFURV9BUkVBX1NLSUxMIiwiREVMRVRFX0FSRUFfU0tJTEwiLCJERUxFVEVfVEVDSF9TS0lMTCIsIkNSRUFURV9TRUNUT1JfU0tJTEwiLCJERUxFVEVfQ09VTlRSWSIsIlVQREFURV9TT0ZUX1NLSUxMIiwiREVMRVRFX1NFQVJDSCJdLCJqdGkiOiIyMDdiMGQxZC1jYWZkLTQ4ODktYjY1ZC1kZmE1NjkzYjkxOTgiLCJjbGllbnRfaWQiOiJ3ZWJfYXBwIn0.fCF29RrwDlT-KUE85xuk-fFSl9PbMtOyHGFpt_CsMLL-zoZVft5YZJdqK8yGdeliNSZPPEfYloMFroBqB3YdccgZEs57y8azb8MK4ETgDLBEcgNTp7n6xwrV8nNfutayV2XJ94nq6-HBRy0evJAa4p2ADI5xRz6ihcL3l3c0mrPAkYBEnF4gwMFXASjVUlRej-w_FXM3Oi5VEUukmBXh5q9E8tg0B-VZ5d42pPTKGiN4Bs86U4N32Ulx43SNZBRn8yZ5N4eldTm7XkabUMzJ5sEWxsDrme1Nmw20vOZWbLihwyoekjM1kCpIp3vFzgitP9jQTmSrQ-6--X_5XFbuRQ',
        expires_in: 43199,
        scope: 'FOO',
        jti: '4ce6cb9b-5652-439b-9c30-00c32b92ff6c',
      };
      dispatch({ type: AUTHENTICATED });
      localStorage.setItem('user', res.access_token);
      history.push('/');
    } catch (error) {
      console.log('error', error);
      dispatch({
        type: AUTHENTICATION_ERROR,
        payload: 'Mail o contraseña incorrecta',
      });
    }
  };
}

export function signOutAction() {
  // return async (dispatch) => {
  return (dispatch) => {
    // await axios.post(`${URL}/signout`);
    dispatch({ type: UNAUTHENTICATED });
    localStorage.removeItem('user');
    // history.push('/login');
  };
}
