import { Button, InputLabel, TableCell, TextField } from '@mui/material';
import React from 'react';

export default function BodyIpAddress({
  table,
  row,
  ID,
  setIp,
  ip,
  handleCloseBoolean,
  handleEditIp,
}) {
  return (
    <>
      {table.docId[row].dataArr.close ? (
        <TableCell key={row}>
          <InputLabel htmlFor={`$${ID} - IP`} />
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
          <InputLabel htmlFor={`$${ID} - IP`} />
          <TextField
            id={`$${ID} - id`}
            size='small'
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
                      handleCloseBoolean(true, table.docId[row].dataArr.docID);
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
                      handleCloseBoolean(true, table.docId[row].dataArr.docID)
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
  );
}
