import { Button, InputLabel, TableCell, TextField } from '@mui/material';
import React from 'react';

export default function BodyFirstName({
  table,
  row,
  ID,
  firstName,
  setFirstName,
  handleCloseBoolean,
  handleEditFirstName,
}) {
  return (
    <>
      {table.docId[row].dataArr.close ? (
        <TableCell key={row}>
          <InputLabel htmlFor={`$${ID} - First Name`} />
          <Button
            onClick={() =>
              handleCloseBoolean(false, table.docId[row].dataArr.docID)
            }
          >
            {table.docId[row].dataArr.first_name}
          </Button>
        </TableCell>
      ) : (
        <TableCell key={row}>
          <InputLabel htmlFor={`$${ID} - First Name`} />
          <TextField
            id={`$${ID} - First Name`}
            size='small'
            defaultValue={table.docId[row].dataArr.first_name}
            onChange={(e) => setFirstName(e.target.value)}
            style={{
              maxWidth: '200px',
              minWidth: '150px',
            }}
            InputProps={{
              endAdornment: (
                <>
                  <Button
                    onClick={() => {
                      handleCloseBoolean(false, table.docId[row].dataArr.docID);
                      handleEditFirstName(
                        firstName,
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
