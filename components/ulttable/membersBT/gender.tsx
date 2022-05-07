import {
  Button,
  CircularProgress,
  InputLabel,
  TableCell,
  TextField,
} from '@mui/material';

export default function BodyGender({
  table,
  row,
  ID,
  gender,
  setGender,
  handleEditGender,
  loadingGender,
}) {
  return (
    <>
      {loadingGender ? (
        <>
          {table.docId[row].dataArr.gender[1] ? (
            <TableCell key={row}>
              <InputLabel htmlFor={`$${ID} - Gender`} />
              <Button
                onClick={() =>
                  handleEditGender(
                    table.docId[row].dataArr.docID,
                    table.docId[row].dataArr.gender[0],
                    false
                  )
                }
              >
                {table.docId[row].dataArr.gender[0]}
              </Button>
            </TableCell>
          ) : (
            <TableCell key={row}>
              <InputLabel htmlFor={`$${ID} - Gender`} />
              <TextField
                id={`$${ID} - id`}
                size='small'
                defaultValue={table.docId[row].dataArr.gender[0]}
                onChange={(e) => setGender(e.target.value)}
                style={{
                  maxWidth: '200px',
                  minWidth: '150px',
                }}
                InputProps={{
                  endAdornment: (
                    <>
                      <Button
                        onClick={() => {
                          handleEditGender(
                            table.docId[row].dataArr.docID,
                            gender,
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
                          handleEditGender(
                            table.docId[row].dataArr.docID,
                            table.docId[row].dataArr.gender[0],
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
