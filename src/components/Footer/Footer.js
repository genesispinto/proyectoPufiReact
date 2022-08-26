import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBBox } from 'cdbreact';

export const Footer = () => {
  return (
    <CDBFooter className="shadow">
      <CDBBox display="flex" flex="column" className=" mx-auto py-5" style={{ width: '80%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <span className="ml-3 h1 font-weight-bold">Pufi</span>
            </a>
          </CDBBox>
        <CDBBox display="flex" style={{ width: '70%' }} justifyContent="between">
            <CDBBox>
              <CDBBox flex="column" display="flex" style={{ cursor: 'pointer', padding: '0' }}>
                <CDBFooterLink href="/">PUFI RAIN</CDBFooterLink>
                <CDBFooterLink href="/">PUFI PUFF</CDBFooterLink>
                <CDBFooterLink href="/">PUFI CART</CDBFooterLink>
                <CDBFooterLink href="/">PUFI NAP</CDBFooterLink>
              </CDBBox>
            </CDBBox>

            <CDBBox>
              <CDBBox flex="column" display="flex" style={{ cursor: 'pointer', padding: '0' }}>
                <CDBFooterLink href="/">CONTACTO</CDBFooterLink >
                <CDBFooterLink href="/">AYUDA</CDBFooterLink>
                <CDBFooterLink href="/">COMO COMPRAR</CDBFooterLink>
                <CDBFooterLink href="/">TERMINOS Y CONDICIONES</CDBFooterLink>
              </CDBBox>
            </CDBBox>

            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                COMPRA 100% SEGURA
              </p>

              <CDBBox display="flex">
            <CDBBtn flat color="dark" className="p-2">
              <CDBIcon fab icon="facebook-f" />
            </CDBBtn>
            <CDBBtn flat color="dark" className="mx-3 p-2">
              <CDBIcon fab icon="twitter" />
            </CDBBtn>
            <CDBBtn flat color="dark" className="p-2">
              <CDBIcon fab icon="instagram" />
            </CDBBtn>
          </CDBBox>

            </CDBBox>
          </CDBBox>
        </CDBBox>
        <CDBBox display="flex" className="mt-4" justifyContent="between">
          <small className="ml-2">&copy; Pufi, 2017. todos los derechos reservados</small>

        </CDBBox>
      </CDBBox>
    </CDBFooter>
  );
};