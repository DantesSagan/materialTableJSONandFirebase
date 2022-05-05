import { Chip, InputLabel, TableCell } from '@mui/material';

export default function BodyId({ del, ID, table, row, setDel, handleDelete }) {
  return (
    <>
      {!del ? (
        <TableCell id={ID}>
          <InputLabel htmlFor={`$${ID} - id`} />
          <Chip
            color='primary'
            key={table.docId[row].dataArr.id}
            label={table.docId[row].dataArr.id}
            onClick={() => setDel(!del)}
          />
        </TableCell>
      ) : (
        <TableCell id={ID}>
          <InputLabel htmlFor={`$${ID} - id`} />
          <Chip
            color='secondary'
            key={table.docId[row].dataArr.id}
            label={table.docId[row].dataArr.id}
            onClick={() => setDel(!del)}
            onDelete={() =>
              handleDelete(
                table.docId[row].dataArr.docID,
                table.docId[row].dataArr.id
              )
            }
          />
        </TableCell>
      )}
    </>
  );
}
