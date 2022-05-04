export default function TableApiSort({ setTable }) {
  // API SORT ID ASC DATA REQUEST

  const sortIDAscData = async () => {
    const response = await fetch(
      `http://localhost:4000/tableData?_sort=id&_order=asc`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();
    console.log(data);
    setTable(data);
    return data;
  };

  // API SORT ID DESC DATA REQUEST

  const sortIDDescData = async () => {
    const response = await fetch(
      `http://localhost:4000/tableData?_sort=id&_order=desc`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();
    console.log(data);
    setTable(data);
    return data;
  };

  // API SORT FN ASC DATA REQUEST

  const sortFirstNameAscData = async () => {
    const response = await fetch(
      `http://localhost:4000/tableData?_sort=first_name&_order=asc`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();
    console.log(data);
    setTable(data);
    return data;
  };

  // API SORT FN DESC DATA REQUEST

  const sortFirstNameDescData = async () => {
    const response = await fetch(
      `http://localhost:4000/tableData?_sort=first_name&_order=desc`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();
    console.log(data);
    setTable(data);
    return data;
  };

  // API SORT LN ASC DATA REQUEST

  const sortLastNameAscData = async () => {
    const response = await fetch(
      `http://localhost:4000/tableData?_sort=last_name&_order=asc`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();
    console.log(data);
    setTable(data);
    return data;
  };

  // API SORT LN DESC DATA REQUEST

  const sortLastNameDescData = async () => {
    const response = await fetch(
      `http://localhost:4000/tableData?_sort=last_name&_order=desc`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();
    console.log(data);
    setTable(data);
    return data;
  };

  const sortEmailAscData = async () => {
    const response = await fetch(
      `http://localhost:4000/tableData?_sort=email&_order=asc`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();
    console.log(data);
    setTable(data);
    return data;
  };

  // API SORT LN DESC DATA REQUEST

  const sortEmailDescData = async () => {
    const response = await fetch(
      `http://localhost:4000/tableData?_sort=email&_order=desc`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();
    console.log(data);
    setTable(data);
    return data;
  };

  // API SORT GENDER DESC DATA REQUEST

  const sortGenderAscData = async () => {
    const response = await fetch(
      `http://localhost:4000/tableData?_sort=gender&_order=asc`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();
    console.log(data);
    setTable(data);
    return data;
  };

  // API SORT GENDER DESC DATA REQUEST

  const sortGenderDescData = async () => {
    const response = await fetch(
      `http://localhost:4000/tableData?_sort=gender&_order=desc`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();
    console.log(data);
    setTable(data);
    return data;
  };

  // API SORT IP DESC DATA REQUEST

  const sortIPAscData = async () => {
    const response = await fetch(
      `http://localhost:4000/tableData?_sort=ip_address&_order=asc`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();
    console.log(data);
    setTable(data);
    return data;
  };

  // API SORT IP DESC DATA REQUEST

  const sortIPDescData = async () => {
    const response = await fetch(
      `http://localhost:4000/tableData?_sort=ip_address&_order=desc`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();
    console.log(data);
    setTable(data);
    return data;
  };

  // API SORT GREATER THAN OR EQUAL {NUMBER} DATA REQUEST

  const sortGTEData = async (id: string) => {
    const response = await fetch(
      `http://localhost:4000/tableData?id_gte=${id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();
    console.log(data);
    setTable(data);
    return data;
  };

  // API SORT LOW THAN OR EQUAL {NUMBER} DATA REQUEST

  const sortLTEData = async (id: string) => {
    const response = await fetch(
      `http://localhost:4000/tableData?id_lte=${id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();
    console.log(data);
    setTable(data);
    return data;
  };

  // API SORT BY ID {NUMBER} DATA REQUEST

  const sortIDNumData = async (id: string) => {
    const response = await fetch(
      `http://localhost:4000/tableData?id=${id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();
    console.log(data);
    setTable(data);
    return data;
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
