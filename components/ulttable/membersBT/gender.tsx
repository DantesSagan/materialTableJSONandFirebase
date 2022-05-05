import { Button, InputLabel, TableCell, TextField } from '@mui/material';

export default function BodyGender({
  table,
  row,
  ID,
  gender,
  setGender,
  handleCloseBoolean,
  handleEditGender,
}) {
  return (
    <>
      {table.docId[row].dataArr.close ? (
        <TableCell key={row}>
          <InputLabel htmlFor={`$${ID} - Gender`} />
          <Button
            onClick={() =>
              handleCloseBoolean(false, table.docId[row].dataArr.docID)
            }
          >
            {table.docId[row].dataArr.gender}
          </Button>
        </TableCell>
      ) : (
        <TableCell key={row}>
          <InputLabel htmlFor={`$${ID} - Gender`} />
          <TextField
            id={`$${ID} - id`}
            size='small'
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
                    onClick={() => {
                      handleCloseBoolean(true, table.docId[row].dataArr.docID);
                      handleEditGender(gender, table.docId[row].dataArr.docID);
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
