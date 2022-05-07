import {
  Button,
  InputLabel,
  TableCell,
  TextField,
  CircularProgress,
} from '@mui/material';
import React from 'react';

export default function BodyIpAddress({
  table,
  row,
  ID,
  setIp,
  ip,
  handleEditIp,
  loadingIP,
}) {
  return (
    <>
      {loadingIP ? (
        <>
          {table.docId[row].dataArr.ip_address[1] ? (
            <TableCell key={row}>
              <InputLabel htmlFor={`$${ID} - IP`} />
              <Button
                onClick={() => {
                  handleEditIp(
                    table.docId[row].dataArr.docID,
                    table.docId[row].dataArr.ip_address[0],
                    false
                  );
                  // setClose(table.docId[row].dataArr.close);
                }}
              >
                {table.docId[row].dataArr.ip_address[0]}
              </Button>
            </TableCell>
          ) : (
            <TableCell key={row}>
              <InputLabel htmlFor={`$${ID} - IP`} />
              <TextField
                id={`$${ID} - id`}
                size='small'
                defaultValue={table.docId[row].dataArr.ip_address[0]}
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
                          handleEditIp(
                            table.docId[row].dataArr.docID,
                            ip,
                            true
                          );
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
                          handleEditIp(
                            table.docId[row].dataArr.docID,
                            table.docId[row].dataArr.ip_address[0],
                            true
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
        </>
      ) : (
        <TableCell>
          <CircularProgress
            size={'2rem'}
            color='success'
            aria-describedby='dialog-description'
          />
        </TableCell>
      )}
    </>
  );
}
