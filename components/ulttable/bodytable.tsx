import {
  Button,
  Chip,
  TableBody,
  TableCell,
  TableRow,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';

export default function BodyTable({
  add,
  firstName,
  lastName,
  email,
  gender,
  ip,
  del,
  table,
  close,
  defaultSort,
  sortGTE,
  sortGTEData,
  setEmail,
  setGender,
  setDel,
  setAdd,
  setFirstName,
  setLastName,
  setIp,
  setClose,
  setDefaultSort,
  setSortGTE,
  handleAdd,
  handleDelete,
  handleEditFirstName,
  handleEditLastName,
  handleEditEmail,
  handleEditGender,
  handleEditIp,
  getDataDB,
  snackArray,
  id,
  setID,
  handleCloseBoolean,
}) {
  return (
    <TableBody>
      {add ? (
        <Button
          onClick={() => {
            snackArray.pop(0, snackArray.length - 1);
            setAdd(!add);
          }}
          variant='contained'
          color='success'
        >
          Add User
        </Button>
      ) : (
        <TableRow sx={{ padding: '10px' }}>
          {add ? null : (
            <Button
              onClick={() => {
                snackArray.pop(0, snackArray.length - 1);
                setAdd(!add);
              }}
              variant='contained'
              color='error'
            >
              Close
            </Button>
          )}
          <Button onClick={handleAdd} variant='contained' color='success'>
            Add
          </Button>
          <TableCell>
            <TextField
              placeholder='id'
              defaultValue={id}
              onChange={(e) => setID(e.target.value)}
            />
          </TableCell>
          <TableCell>
            <TextField
              placeholder='first_name'
              defaultValue={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </TableCell>
          <TableCell>
            <TextField
              placeholder='last_name'
              defaultValue={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </TableCell>
          <TableCell>
            <TextField
              placeholder='email'
              defaultValue={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </TableCell>
          <TableCell>
            <TextField
              placeholder='gender'
              defaultValue={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </TableCell>
          <TableCell>
            <TextField
              placeholder='ip'
              defaultValue={ip}
              onChange={(e) => setIp(e.target.value)}
            />
          </TableCell>
        </TableRow>
      )}
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
            {!del ? (
              <TableCell>
                <Chip
                  color='primary'
                  key={table.docId[row].dataArr.id}
                  label={table.docId[row].dataArr.id}
                  onClick={() => setDel(!del)}
                />
              </TableCell>
            ) : (
              <TableCell>
                <Chip
                  color='secondary'
                  key={table.docId[row].dataArr.id}
                  label={table.docId[row].dataArr.id}
                  onClick={() => setDel(!del)}
                  onDelete={() =>
                    handleDelete(
                      table.docId[row].dataArr.docID,
                      table.docId[row].dataArr.id
                    )
                  }
                />
              </TableCell>
            )}
            {/* FIRST_NAME */}
            {close ? (
              <TableCell key={row}>
                <Button onClick={() => setClose(!close)}>
                  {table.docId[row].dataArr.first_name}
                </Button>
              </TableCell>
            ) : (
              <TableCell key={row}>
                <TextField
                  defaultValue={table.docId[row].dataArr.first_name}
                  onChange={(e) => setFirstName(e.target.value)}
                  style={{
                    maxWidth: '200px',
                    minWidth: '150px',
                  }}
                  InputProps={{
                    endAdornment: (
                      <Button
                        onClick={() => {
                          setClose(!close);
                          handleEditFirstName(
                            firstName,
                            table.docId[row].dataArr.docID
                          );
                        }}
                      >
                        edit
                      </Button>
                    ),
                  }}
                />
              </TableCell>
            )}
            {/* LAST_NAME */}
            {close ? (
              <TableCell key={row}>
                <Button onClick={() => setClose(!close)}>
                  {table.docId[row].dataArr.last_name}
                </Button>
              </TableCell>
            ) : (
              <TableCell key={row}>
                <TextField
                  defaultValue={table.docId[row].dataArr.last_name}
                  onChange={(e) => setLastName(e.target.value)}
                  style={{
                    maxWidth: '200px',
                    minWidth: '150px',
                  }}
                  InputProps={{
                    endAdornment: (
                      <Button
                        onClick={() => {
                          setClose(!close);
                          handleEditLastName(
                            lastName,
                            table.docId[row].dataArr.docID
                          );
                        }}
                      >
                        edit
                      </Button>
                    ),
                  }}
                />
              </TableCell>
            )}
            {/* EMAIL */}
            {close ? (
              <TableCell key={row}>
                <Button onClick={() => setClose(!close)}>
                  {table.docId[row].dataArr.email}
                </Button>
              </TableCell>
            ) : (
              <TableCell key={row}>
                <TextField
                  defaultValue={table.docId[row].dataArr.email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    maxWidth: '200px',
                    minWidth: '150px',
                  }}
                  InputProps={{
                    endAdornment: (
                      <Button
                        onClick={() => {
                          setClose(!close);
                          handleEditEmail(
                            email,
                            table.docId[row].dataArr.docID
                          );
                        }}
                      >
                        edit
                      </Button>
                    ),
                  }}
                />
              </TableCell>
            )}
            {/* GENDER */}
            {close ? (
              <TableCell key={row}>
                <Button onClick={() => setClose(!close)}>
                  {table.docId[row].dataArr.gender}
                </Button>
              </TableCell>
            ) : (
              <TableCell key={row}>
                <TextField
                  defaultValue={table.docId[row].dataArr.gender}
                  onChange={(e) => setGender(e.target.value)}
                  style={{
                    maxWidth: '200px',
                    minWidth: '150px',
                  }}
                  InputProps={{
                    endAdornment: (
                      <>
                        <Button
                          style={{
                            maxWidth: '40px',
                            minWidth: '20px',
                          }}
                          size='small'
                          color='error'
                          variant='contained'
                          onClick={() =>
                            handleCloseBoolean(
                              true,
                              table.docId[row].dataArr.docID
                            )
                          }
                        >
                          <Button
                            onClick={() => {
                              setClose(!close);
                              handleEditGender(
                                gender,
                                table.docId[row].dataArr.docID
                              );
                            }}
                          >
                            edit
                          </Button>
                          -
                        </Button>
                      </>
                    ),
                  }}
                />
              </TableCell>
            )}
            {/* IP */}
            {table.docId[row].dataArr.close ? (
              <TableCell key={row}>
                <Button
                  onClick={() => {
                    handleCloseBoolean(false, table.docId[row].dataArr.docID);
                    // setClose(table.docId[row].dataArr.close);
                  }}
                >
                  {table.docId[row].dataArr.ip_address}
                </Button>
              </TableCell>
            ) : (
              <TableCell key={row}>
                <TextField
                  defaultValue={table.docId[row].dataArr.ip_address}
                  onChange={(e) => setIp(e.target.value)}
                  style={{
                    maxWidth: '200px',
                    minWidth: '150px',
                  }}
                  InputProps={{
                    endAdornment: (
                      <>
                        {' '}
                        <Button
                          style={{
                            maxWidth: '40px',
                            minWidth: '20px',
                          }}
                          size='small'
                          onClick={() => {
                            handleCloseBoolean(
                              true,
                              table.docId[row].dataArr.docID
                            );
                            handleEditIp(ip, table.docId[row].dataArr.docID);
                          }}
                        >
                          +
                        </Button>
                        <Button
                          style={{
                            maxWidth: '40px',
                            minWidth: '20px',
                          }}
                          size='small'
                          color='error'
                          variant='contained'
                          onClick={() =>
                            handleCloseBoolean(
                              true,
                              table.docId[row].dataArr.docID
                            )
                          }
                        >
                          -
                        </Button>
                      </>
                    ),
                  }}
                />
              </TableCell>
            )}
          </TableRow>
        );
      })}
    </TableBody>
  );
}
