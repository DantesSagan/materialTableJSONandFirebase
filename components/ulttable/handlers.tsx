import { arrayUnion } from 'firebase/firestore';

export default function HandlersTable({
  close,
  setClose,
  setTable,
  table,
  firstName,
  lastName,
  email,
  gender,
  ip,
  patchFirstName,
  patchLastName,
  patchGender,
  patchEmail,
  patchIp,
  submitData,
  deleteData,
  snackArray,
  setOpenSnack,
  rowTableID,
  id,
  setId,
  getDataDB,
  setLoading,
  loading,
  setDefaultSort,
  defaultSort,
  patchCloseBoolean,
}) {
  const handleEditFirstName = (
    rowToEdit: string | null,
    rowID: string | null
  ) => {
    setClose(!close);
    setLoading(true);
    getDataDB().then(() =>
      setTimeout(() => {
        setLoading(false);
      }, 400)
    );
    patchFirstName(rowToEdit, rowID);
  };

  const handleEditLastName = (
    rowToEdit: string | null,
    rowID: string | null
  ) => {
    setClose(!close);
    getDataDB().then(() =>
      setTimeout(() => {
        setLoading(false);
      }, 400)
    );
    patchLastName(rowToEdit, rowID);
  };

  const handleEditEmail = (rowToEdit: string | null, rowID: string | null) => {
    setClose(!close);
    getDataDB().then(() =>
      setTimeout(() => {
        setLoading(false);
      }, 400)
    );
    patchEmail(rowToEdit, rowID);
  };

  const handleEditGender = (rowToEdit: string | null, rowID: string | null) => {
    getDataDB().then(() =>
      setTimeout(() => {
        setLoading(false);
      }, 400)
    );
    patchGender(rowToEdit, rowID);
  };

  const handleEditIp = (rowToEdit: string | null, rowID: string | null) => {
    getDataDB().then(() =>
      setTimeout(() => {
        setLoading(false);
      }, 400)
    );
    patchIp(rowToEdit, rowID);
  };

  const handleCloseBoolean = (
    rowBoolean: boolean | null,
    rowID: string | null,
    rowGender: string[] | null
  ) => {
    getDataDB().then(() =>
      setTimeout(() => {
        setLoading(false);
      }, 400)
    );
    patchCloseBoolean(rowBoolean, rowID, rowGender);
  };

  const handleAdd = () => {
    return Object.keys(table.docId).map((row: any) => {
      if (table.docId[row].dataArr.id === undefined) {
        return;
      }

      // const idIndex: boolean = table.docId[row] === 0;
      // const idIndexPlusOne: number = table.docId[row].length + 1;
      let idNum: number = id;
      // if (idIndex) {
      //   const newData = {
      //     id: 1,
      //     first_name: firstName,
      //     last_name: lastName,
      //     email: email,
      //     gender: gender,
      //     ip_address: ip,
      //     docID: rowTableID,
      //   };
      //   snackArray.push(newData);
      //   table.docId.push(newData);
      //   submitData(newData);
      //   setOpenSnack(true);
      // } else if (!idIndex) {
      const newData = {
        id: idNum,
        first_name: firstName,
        last_name: lastName,
        email: email,
        gender: gender,
        ip_address: ip,
        docID: rowTableID,
        close: true,
      };
      submitData(newData);
      setOpenSnack(true);
      setLoading(true);
      getDataDB().then(() =>
        setTimeout(() => {
          setLoading(false);
        }, 400)
      );
      // }
    });
  };

  const handleDelete = (rowToDelete: string, rowDeleteID: number | null) => {
    // const index = table.docId.findIndex((itemID) => {
    //   return itemID.id === rowToDelete;
    // });
    // console.log(index);
    deleteData(rowToDelete, rowDeleteID);
    setLoading(true);
    getDataDB().then(() =>
      setTimeout(() => {
        setLoading(false);
      }, 400)
    );
    return Object.keys(table.docId).map((row: string) => {
      Object.values(table.docId[row].dataArr).filter(
        (rowID: { id: number }) => {
          rowID.id !== rowDeleteID;
        }
      );
    });
  };
  return {
    handleEditFirstName,
    handleEditLastName,
    handleEditEmail,
    handleEditGender,
    handleEditIp,
    handleDelete,
    handleAdd,
    handleCloseBoolean,
  };
}
