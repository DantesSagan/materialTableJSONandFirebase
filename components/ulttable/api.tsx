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
}): {
  submitData: (dataArr: {}) => Promise<void>;
  deleteData: (
    rowToDelete: string | null,
    rowDeleteID: number | null
  ) => Promise<void>;
  patchFirstName: (
    first_name: string | null,
    docIDRow: string | null
  ) => Promise<void>;
  patchLastName: (
    last_name: string | null,
    docIDRow: string | null
  ) => Promise<void>;
  patchEmail: (email: string | null, docIDRow: string | null) => Promise<void>;
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
    first_name: string | null,
    docIDRow: string | null
  ) => {
    const editRef = doc(firebaseLib.firestore(), 'table', docIDRow);

    await updateDoc(editRef, {
      'dataArr.first_name': first_name,
    }).then(() => {
      console.log(
        `Changes first_name successfull of ${docIDRow} for ${first_name}`
      );
      getDataDB().then(() => setLoading(false));
    });
  };

  // API PATCH METHOD LAST NAME
  const patchLastName = async (
    last_name: string | null,
    docIDRow: string | null
  ) => {
    const editRef = doc(firebaseLib.firestore(), 'table', docIDRow);

    await updateDoc(editRef, {
      'dataArr.last_name': last_name,
    }).then(() => {
      console.log(
        `Changes last_name successfull of ${docIDRow} for ${last_name}`
      );
      getDataDB().then(() => setLoading(false));
    });
  };

  // API PATCH METHOD EMAIL
  const patchEmail = async (email: string | null, docIDRow: string | null) => {
    const editRef = doc(firebaseLib.firestore(), 'table', docIDRow);

    await updateDoc(editRef, {
      'dataArr.email': email,
    }).then(() => {
      console.log(`Changes email successfull of ${docIDRow} for ${email}`);
      getDataDB().then(() => setLoading(false));
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
