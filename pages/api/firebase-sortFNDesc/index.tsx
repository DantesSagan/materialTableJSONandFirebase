import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { firebaseLib } from '../../../components/firebaseLib/firebase';

const handler = async (
  req: any,
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: {
        (arg0: { error?: string; message?: string; docId?: any }): void;
        new (): any;
      };
    };
  }
) => {
  const sortRef = collection(firebaseLib.firestore(), 'table');

  const q = query(sortRef, orderBy('dataArr.first_name', 'desc'));

  const docId = await getDocs(q)
    .then((querySnap) => {
      let array: any[] = [];
      querySnap.docs.forEach((doc) => {
        console.log(doc.data());
        array.push(doc.data());
      });
      return array;
    })
    .catch((error) => {
      console.error('Error to get document: ', error);
    });

  if (!docId) {
    res.status(401).json({ error: 'Cannot receive data' });
  } else {
    res.status(200).json({ message: 'Success', docId });
  }
};
export default handler;
