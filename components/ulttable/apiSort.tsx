export default function TableApiSort({ setTable, table }) {
  // API SORT ID ASC DATA REQUEST

  const sortIDAscData = async () => {
    const response = await fetch('/api/firebase-sortIDAsc');
    const data = await response.json();
    console.log(data);
    return setTable(data);
  };

  // API SORT ID DESC DATA REQUEST

  const sortIDDescData = async () => {
    const response = await fetch('/api/firebase-sortIDDesc');
    const data = await response.json();
    console.log(data);
    return setTable(data);
  };

  // API SORT FN ASC DATA REQUEST

  const sortFirstNameAscData = async () => {
    const response = await fetch('/api/firebase-sortFNAsc');
    const data = await response.json();
    console.log(data);
    return setTable(data);
  };

  // API SORT FN DESC DATA REQUEST

  const sortFirstNameDescData = async () => {
    const response = await fetch('/api/firebase-sortFNDesc');
    const data = await response.json();
    console.log(data);
    return setTable(data);
  };

  // API SORT LN ASC DATA REQUEST

  const sortLastNameAscData = async () => {
    const response = await fetch('/api/firebase-sortLNAsc');
    const data = await response.json();
    console.log(data);
    return setTable(data);
  };

  // API SORT LN DESC DATA REQUEST

  const sortLastNameDescData = async () => {
    const response = await fetch('/api/firebase-sortLNDesc');
    const data = await response.json();
    console.log(data);
    return setTable(data);
  };

  const sortEmailAscData = async () => {
    const response = await fetch('/api/firebase-sortEmailAsc');
    const data = await response.json();
    console.log(data);
    return setTable(data);
  };

  // API SORT LN DESC DATA REQUEST

  const sortEmailDescData = async () => {
    const response = await fetch('/api/firebase-sortEmailDesc');
    const data = await response.json();
    console.log(data);
    return setTable(data);
  };

  // API SORT GENDER DESC DATA REQUEST

  const sortGenderAscData = async () => {
    const response = await fetch('/api/firebase-sortGenderAsc');
    const data = await response.json();
    console.log(data);
    return setTable(data);
  };

  // API SORT GENDER DESC DATA REQUEST

  const sortGenderDescData = async () => {
    const response = await fetch('/api/firebase-sortGenderDesc');
    const data = await response.json();
    console.log(data);
    return setTable(data);
  };

  // API SORT IP DESC DATA REQUEST

  const sortIPAscData = async () => {
    const response = await fetch('/api/firebase-sortIPAsc');
    const data = await response.json();
    console.log(data);
    return setTable(data);
  };

  // API SORT IP DESC DATA REQUEST

  const sortIPDescData = async () => {
    const response = await fetch('/api/firebase-sortIPDesc');
    const data = await response.json();
    console.log(data);
    return setTable(data);
  };

  // API SORT GREATER THAN OR EQUAL {NUMBER} DATA REQUEST

  const sortGTEData = async (id: string) => {
    const response = await fetch('/api/firebase-sortGTE', {
      method: 'POST',
      body: JSON.stringify({ id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);

    return setTable(data);
  };

  // API SORT LOW THAN OR EQUAL {NUMBER} DATA REQUEST

  const sortLTEData = async (id: string) => {
    const response = await fetch('/api/firebase-sortLTE', {
      method: 'POST',
      body: JSON.stringify({ id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);

    return setTable(data);
  };

  // API SORT BY ID {NUMBER} DATA REQUEST

  const sortIDNumData = async (id: string) => {
    const response = await fetch('/api/firebase-sortNum', {
      method: 'POST',
      body: JSON.stringify({ id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);

    return setTable(data);
  };

  return {
    sortIDAscData,
    sortIDDescData,
    sortFirstNameAscData,
    sortFirstNameDescData,
    sortLastNameAscData,
    sortLastNameDescData,
    sortEmailAscData,
    sortEmailDescData,
    sortGenderAscData,
    sortGenderDescData,
    sortIPAscData,
    sortIPDescData,
    sortGTEData,
    sortLTEData,
    sortIDNumData,
  };
}
