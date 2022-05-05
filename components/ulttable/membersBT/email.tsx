import { Button, InputLabel, TableCell, TextField } from '@mui/material';

export default function BodyEmail({
  table,
  row,
  handleCloseBoolean,
  ID,
  setEmail,
  email,
  handleEditEmail,
}) {
  return (
    <>
      {table.docId[row].dataArr.close ? (
        <TableCell key={row}>
          <InputLabel htmlFor={`$${ID} - Email`} />
          <Button
            onClick={() =>
              handleCloseBoolean(false, table.docId[row].dataArr.docID)
            }
          >
            {table.docId[row].dataArr.email}
          </Button>
        </TableCell>
      ) : (
        <TableCell key={row}>
          <InputLabel htmlFor={`$${ID} - Email`} />
          <TextField
            id={`$${ID} - id`}
            size='small'
            defaultValue={table.docId[row].dataArr.email}
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
                      handleCloseBoolean(true, table.docId[row].dataArr.docID);
                      handleEditEmail(email, table.docId[row].dataArr.docID);
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
