import {
  Button,
  CircularProgress,
  InputLabel,
  TableCell,
  TextField,
} from '@mui/material';
import React from 'react';

export default function BodyLastName({
  table,
  row,
  ID,
  lastName,
  handleCloseBoolean,
  setLastName,
  handleEditLastName,
  loadingLN,
}) {
  return (
    <>
      {loadingLN ? (
        <>
          {table.docId[row].dataArr.last_name[1] ? (
            <TableCell key={row}>
              <InputLabel htmlFor={`$${ID} - Last Name`} />
              <Button
                onClick={() =>
                  handleEditLastName(
                    table.docId[row].dataArr.docID,
                    table.docId[row].dataArr.last_name[0],
                    false
                  )
                }
              >
                {table.docId[row].dataArr.last_name[0]}
              </Button>
            </TableCell>
          ) : (
            <TableCell key={row}>
              <InputLabel htmlFor={`$${ID} - Last Name`} />
              <TextField
                id={`$${ID} - id`}
                size='small'
                defaultValue={table.docId[row].dataArr.last_name[0]}
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
                          handleEditLastName(
                            table.docId[row].dataArr.docID,
                            lastName,
                            false
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
                          handleEditLastName(
                            table.docId[row].dataArr.docID,
                            table.docId[row].dataArr.last_name[0],
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
