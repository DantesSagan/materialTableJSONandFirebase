import {
  Button,
  CircularProgress,
  InputLabel,
  TableCell,
  TextField,
} from '@mui/material';
import React from 'react';

export default function BodyFirstName({
  table,
  row,
  ID,
  firstName,
  setFirstName,
  handleCloseBoolean,
  handleEditFirstName,
  loadingFN,
}) {
  return (
    <>
      {loadingFN ? (
        <>
          {table.docId[row].dataArr.first_name[1] ? (
            <TableCell key={row}>
              <InputLabel htmlFor={`$${ID} - First Name`} />
              <Button
                onClick={() =>
                  handleEditFirstName(
                    table.docId[row].dataArr.docID,
                    table.docId[row].dataArr.first_name[0],
                    false
                  )
                }
              >
                {table.docId[row].dataArr.first_name[0]}
              </Button>
            </TableCell>
          ) : (
            <TableCell key={row}>
              <InputLabel htmlFor={`$${ID} - First Name`} />
              <TextField
                id={`$${ID} - First Name`}
                size='small'
                defaultValue={table.docId[row].dataArr.first_name[0]}
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
                          handleEditFirstName(
                            table.docId[row].dataArr.docID,
                            firstName,
                            true
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
                          handleEditFirstName(
                            table.docId[row].dataArr.docID,
                            table.docId[row].dataArr.first_name[0],
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
