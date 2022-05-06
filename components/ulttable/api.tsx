import {
  getDocs,
  collection,
  updateDoc,
  setDoc,
  doc,
  deleteDoc,
} from 'firebase/firestore';
import { firebaseLib } from '../firebaseLib/firebase';

export default function IndexApiTable({
  getDataDB,
  setLoading,
  table,
  rowTableID,
  setLoadingFN,
  setLoadingLN,
  setLoadingEmail,
}): {
  submitData: (dataArr: {}) => Promise<void>;
  deleteData: (
    rowToDelete: string | null,
    rowDeleteID: number | null
  ) => Promise<void>;
  patchFirstName: (
    docIDRow: string | null,
    rowFirstName: string | null,
    rowOpen: boolean | null
  ) => Promise<void>;
  patchLastName: (
    docIDRow: string | null,
    rowLastName: string | null,
    rowOpen: boolean | null
  ) => Promise<void>;
  patchEmail: (
    docIDRow: string | null,
    rowEmail: string | null,
    rowOpen: boolean | null
  ) => Promise<void>;
  patchGender: (
    gender: string | null,
    docIDRow: string | null
  ) => Promise<void>;
  patchIp: (
    ip_address: string | null,
    docIDRow: string | null
  ) => Promise<void>;
  patchCloseBoolean: (
    close: boolean | null,
    docIDRow: string | null
  ) => Promise<void>;
} {
  // API POST REQUEST
  //  id: number;
  //   first_name: string[];
  //   last_name: string[];
  //   email: string[];
  //   gender: string;
  //   ip_address: string;
  //   docID: string;
  //   close: boolean;
  const submitData = async (dataArr: {}) => {
    const editRef = doc(firebaseLib.firestore(), 'table', rowTableID);
    // const getDocTodos = await getDocs(
    //   collection(firebaseLib.firestore(), 'table')
    // );
    // return Object.keys(table.docId).map(async (row: any) => {
    //   const response = await fetch('/api/firebase-api');
    if (dataArr === undefined) {
      return;
    }
    setDoc(editRef, {
      dataArr,
    }).then(() => {
      console.log(`Post successfull of ${dataArr}!`);
      getDataDB().then(() => setLoading(false));
    });
    // });
  };

  // API DELETE REQUEST
  const deleteData = async (
    rowToDelete: string | null,
    rowDeleteID: number | null
  ) => {
    const editRef = doc(firebaseLib.firestore(), 'table', rowToDelete);
    await deleteDoc(editRef).then(() => {
      console.log(`Delete successfull of ${rowToDelete} and ${rowDeleteID}`);
      getDataDB().then(() => setLoading(false));
    });
  };

  // PUT method changes string in object and delete another strings and return only changed string
  // PATCH method chages string in object and return whole object with changed string
  //   {
  //   id: number | null;
  //   first_name: string | null;
  //   last_name: string | null;
  //   email: string | null;
  //   gender: string | null;
  //   ip_address: string | null;
  //   docID: string | null;
  // }

  // API PATCH METHOD FIRST NAME
  const patchFirstName = async (
    docIDRow: string | null,
    rowFirstName: string | null,
    rowOpen: boolean | null
  ) => {
    const editRef = doc(firebaseLib.firestore(), 'table', docIDRow);

    await updateDoc(editRef, {
      'dataArr.first_name': [rowFirstName, rowOpen],
    }).then(() => {
      console.log(
        `Changes first_name successfull of ${docIDRow} for ${rowFirstName}`
      );
      getDataDB().then(() => setLoadingFN(true));
    });
  };

  // API PATCH METHOD LAST NAME
  const patchLastName = async (
    docIDRow: string | null,
    rowLastName: string | null,
    rowOpen: boolean | null
  ) => {
    const editRef = doc(firebaseLib.firestore(), 'table', docIDRow);

    await updateDoc(editRef, {
      'dataArr.last_name': [rowLastName, rowOpen],
    }).then(() => {
      console.log(
        `Changes last_name successfull of ${docIDRow} for ${rowLastName}`
      );
      getDataDB().then(() => setLoadingLN(true));
    });
  };

  // API PATCH METHOD EMAIL
  const patchEmail = async (
    docIDRow: string | null,
    rowEmail: string | null,
    rowOpen: boolean | null
  ) => {
    const editRef = doc(firebaseLib.firestore(), 'table', docIDRow);

    await updateDoc(editRef, {
      'dataArr.email': [rowEmail, rowOpen],
    }).then(() => {
      console.log(`Changes email successfull of ${docIDRow} for ${rowEmail}`);
      getDataDB().then(() => setLoadingEmail(true));
    });
  };

  // API PATCH METHOD GENDER
  const patchGender = async (
    gender: string | null,
    docIDRow: string | null
  ) => {
    const editRef = doc(firebaseLib.firestore(), 'table', docIDRow);

    await updateDoc(editRef, {
      'dataArr.gender': gender,
    }).then(() => {
      console.log(`Changes gender successfull of ${docIDRow} for ${gender}`);
      getDataDB().then(() => setLoading(false));
    });
  };

  // API PATCH METHOD IP
  const patchIp = async (
    ip_address: string | null,
    docIDRow: string | null
  ) => {
    const editRef = doc(firebaseLib.firestore(), 'table', docIDRow);

    await updateDoc(editRef, {
      'dataArr.ip_address': ip_address,
    }).then(() => {
      console.log(
        `Changes ip_address successfull of ${docIDRow} for ${ip_address}`
      );
      getDataDB().then(() => setLoading(false));
    });
  };

  // API PATCH CLOSE BOOLEAN
  const patchCloseBoolean = async (
    close: boolean | null,
    docIDRow: string | null
  ) => {
    const editRef = doc(firebaseLib.firestore(), 'table', docIDRow);

    await updateDoc(editRef, {
      'dataArr.close': close,
    }).then(() => {
      console.log(`Changes close successfull of ${docIDRow} for ${close}`);
      getDataDB().then(() => setLoading(false));
    });
  };
  return {
    submitData,
    deleteData,
    patchFirstName,
    patchLastName,
    patchEmail,
    patchGender,
    patchIp,
    patchCloseBoolean,
  };
}
