import { arrayUnion } from 'firebase/firestore';

export default function HandlersTable({
  close,
  setClose,
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
  setOpenSnack,
  rowTableID,
  id,
  getDataDB,
  setLoading,
  patchCloseBoolean,
  setLoadingFN,
  loadingFN,
  setLoadingLN,
  setLoadingEmail,
  setLoadingGender,
  setLoadingIP,
}) {
  const handleEditFirstName = (
    rowID: string | null,
    rowToEdit: string[] | null,
    rowOpen: boolean | null
  ) => {
    setLoadingFN(true);
    getDataDB().then(() => setLoadingFN(false));
    patchFirstName(rowID, rowToEdit, rowOpen);
  };

  const handleEditLastName = (
    rowID: string | null,
    rowToEdit: string | null,
    rowOpen: boolean | null
  ) => {
    setLoadingLN(true);
    getDataDB().then(() => setLoadingLN(false));
    patchLastName(rowID, rowToEdit, rowOpen);
  };

  const handleEditEmail = (
    rowID: string | null,
    rowToEdit: string | null,
    rowOpen: boolean | null
  ) => {
    setLoadingEmail(true);
    getDataDB().then(() => setLoadingEmail(false));
    patchEmail(rowID, rowToEdit, rowOpen);
  };

  const handleEditGender = (
    rowID: string | null,
    rowToEdit: string | null,
    rowOpen: boolean | null
  ) => {
    setLoadingGender(true);
    getDataDB().then(() => setLoadingGender(false));
    patchGender(rowID, rowToEdit, rowOpen);
  };

  const handleEditIp = (
    rowID: string | null,
    rowToEdit: string | null,
    rowOpen: boolean | null
  ) => {
    setLoadingIP(true);
    getDataDB().then(() => setLoadingIP(false));
    patchIp(rowID, rowToEdit, rowOpen);
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
        first_name: [firstName, true],
        last_name: [lastName, true],
        email: [email, true],
        gender: [gender, true],
        ip_address: [ip, true],
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
