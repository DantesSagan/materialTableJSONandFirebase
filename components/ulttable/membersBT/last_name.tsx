import { Button, InputLabel, TableCell, TextField } from '@mui/material';
import React from 'react';

export default function BodyLastName({
  table,
  row,
  ID,
  lastName,
  handleCloseBoolean,
  setLastName,
  handleEditLastName,
}) {
  return (
    <>
      {table.docId[row].dataArr.close ? (
        <TableCell key={row}>
          <InputLabel htmlFor={`$${ID} - Last Name`} />
          <Button
            onClick={() =>
              handleCloseBoolean(false, table.docId[row].dataArr.docID)
            }
          >
            {table.docId[row].dataArr.last_name}
          </Button>
        </TableCell>
      ) : (
        <TableCell key={row}>
          <InputLabel htmlFor={`$${ID} - Last Name`} />
          <TextField
            id={`$${ID} - id`}
            size='small'
            defaultValue={table.docId[row].dataArr.last_name}
            onChange={(e) => setLastName(e.target.value)}
            style={{
              maxWidth: '200px',
              minWidth: '150px',
            }}
            InputProps={{
              endAdornment: (
                <>
                  <Button
                    onClick={() => {
                      handleCloseBoolean(true, table.docId[row].dataArr.docID);
                      handleEditLastName(
                        lastName,
                        table.docId[row].dataArr.docID
                      );
                    }}
                  >
                    edit
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
