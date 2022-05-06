import {
  Button,
  CircularProgress,
  InputLabel,
  TableCell,
  TextField,
} from '@mui/material';

export default function BodyEmail({
  table,
  row,
  handleCloseBoolean,
  ID,
  setEmail,
  email,
  handleEditEmail,
  loadingEmail,
}) {
  return (
    <>
      {loadingEmail ? (
        <>
          {table.docId[row].dataArr.email[1] ? (
            <TableCell key={row}>
              <InputLabel htmlFor={`$${ID} - Email`} />
              <Button
                onClick={() =>
                  handleEditEmail(
                    table.docId[row].dataArr.docID,
                    table.docId[row].dataArr.email[0],
                    false
                  )
                }
              >
                {table.docId[row].dataArr.email[0]}
              </Button>
            </TableCell>
          ) : (
            <TableCell key={row}>
              <InputLabel htmlFor={`$${ID} - Email`} />
              <TextField
                id={`$${ID} - id`}
                size='small'
                defaultValue={table.docId[row].dataArr.email[0]}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  maxWidth: '200px',
                  minWidth: '150px',
                }}
                InputProps={{
                  endAdornment: (
                    <>
                      <Button
                        onClick={() => {
                          handleEditEmail(
                            table.docId[row].dataArr.docID,
                            email,
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
                          handleEditEmail(
                            table.docId[row].dataArr.docID,
                            table.docId[row].dataArr.email[0],
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
