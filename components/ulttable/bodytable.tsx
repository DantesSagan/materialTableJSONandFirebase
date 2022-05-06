import {
  CircularProgress,
  Stack,
  TableBody,
  TableCell,
  TableRow,
} from '@mui/material';
import React, { useId } from 'react';
import BodyEmail from './membersBT/email';
import BodyFirstName from './membersBT/first_name';
import BodyGender from './membersBT/gender';
import BodyId from './membersBT/id';
import BodyIpAddress from './membersBT/ip_address';
import BodyLastName from './membersBT/last_name';

export default function BodyTable({
  loadingFN,
  loading,
  firstName,
  lastName,
  email,
  gender,
  ip,
  del,
  table,
  setEmail,
  setGender,
  setDel,
  setFirstName,
  setLastName,
  setIp,
  handleDelete,
  handleEditFirstName,
  handleEditLastName,
  handleEditEmail,
  handleEditGender,
  handleEditIp,
  handleCloseBoolean,
  loadingLN,
  loadingEmail,
}) {
  const ID = useId();
  console.log(ID);

  return (
    <TableBody id={ID}>
      {Object.keys(table.docId).map((row: any) => {
        return (
          <TableRow
            key={table}
            sx={{
              '&:last-child td, &:last-child th': {
                border: 0,
              },
            }}
          >
            {/* ID */}
            <BodyId
              del={del}
              ID={ID}
              table={table}
              row={row}
              setDel={setDel}
              handleDelete={handleDelete}
            />

            {/* FIRST_NAME */}
            <BodyFirstName
              table={table}
              row={row}
              ID={ID}
              firstName={firstName}
              setFirstName={setFirstName}
              handleCloseBoolean={handleCloseBoolean}
              handleEditFirstName={handleEditFirstName}
              loadingFN={loadingFN}
            />

            {/* LAST_NAME */}
            <BodyLastName
              table={table}
              row={row}
              ID={ID}
              lastName={lastName}
              handleCloseBoolean={handleCloseBoolean}
              setLastName={setLastName}
              handleEditLastName={handleEditLastName}
              loadingLN={loadingLN}
            />

            {/* EMAIL */}
            <BodyEmail
              table={table}
              row={row}
              handleCloseBoolean={handleCloseBoolean}
              ID={ID}
              setEmail={setEmail}
              email={email}
              handleEditEmail={handleEditEmail}
              loadingEmail={loadingEmail}
            />
            {/* GENDER */}
            <BodyGender
              table={table}
              row={row}
              ID={ID}
              gender={gender}
              setGender={setGender}
              handleCloseBoolean={handleCloseBoolean}
              handleEditGender={handleEditGender}
            />
            {/* IP */}
            <BodyIpAddress
              table={table}
              row={row}
              ID={ID}
              setIp={setIp}
              ip={ip}
              handleCloseBoolean={handleCloseBoolean}
              handleEditIp={handleEditIp}
            />
          </TableRow>
        );
      })}
    </TableBody>
  );
}
