/* eslint-disable react-hooks/exhaustive-deps */
import {
  TableContainer,
  Table,
  Paper,
  Stack,
  Button,
  TextField,
  Box,
  Snackbar,
  LinearProgress,
  CircularProgress,
  InputLabel,
} from '@mui/material';
import IndexApiTable from '../../components/ulttable/api';
import TableApiSort from '../../components/ulttable/apiSort';
import BodyTable from '../../components/ulttable/bodytable';
import HandlersTable from '../../components/ulttable/handlers';
import HeadTable from '../../components/ulttable/head';

import React, { useEffect, useState, useId } from 'react';

export default function FirebaseData() {
  const [text, setText] = useState('');
  const [table, setTable] = useState<any[]>([]);
  const [turnSwitch, setTurnSwitch] = useState(true);

  //   API GET REQUEST WITH LOAD/HIDE dataFirebase BUTTON
  // //   Short object
  // const getData = table.docId;
  // //    Object function with nested index
  // const Data = () =>
  //   Object.keys(getData).map((docItem) => {
  //     return (
  //       <div key={docItem}>
  //         <ul
  //           key={docItem}
  //           style={{
  //             display: 'inline-block',
  //           }}
  //         >
  //           <li style={{ float: 'left' }} key={docItem}>
  //             {getData[docItem].id} - {` `}
  //             {getData[docItem].first_name} - {` `}
  //             {getData[docItem].last_name}
  //             {getData[docItem].email}
  //             {getData[docItem].gender}
  //             {getData[docItem].ip_address}
  //           </li>
  //         </ul>
  //       </div>
  //     );
  //   });

  // PROPS STATES
  const [firstName, setFirstName] = useState<string | null>(null);
  const [lastName, setLastName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [gender, setGender] = useState<string | null>(null);
  const [ip, setIp] = useState<string | null>(null);

  // CRUD BOOLEAN
  const [close, setClose] = useState<boolean>(true);
  const [del, setDel] = useState<boolean>(false);
  const [add, setAdd] = useState<boolean>(true);
  const [id, setId] = useState<string | null>(null);
  const [idLTE, setIdLTE] = useState<string | null>(null);
  const [idNum, setIdNum] = useState<string | null>(null);

  // SORT BOOLEAN
  const [defaultSort, setDefaultSort] = useState<boolean>(true);
  const [sortID, setSortID] = useState<boolean>(true);
  const [sortFN, setSortFN] = useState<boolean>(true);
  const [sortLN, setSortLN] = useState<boolean>(true);
  const [sortEmail, setSortEmail] = useState<boolean>(true);
  const [sortGender, setSortGender] = useState<boolean>(true);
  const [sortIP, setSortIP] = useState<boolean>(true);
  const [sortGTE, setSortGTE] = useState<boolean>(true);
  const [sortLTE, setSortLTE] = useState<boolean>(true);
  const [sortNum, setSortNum] = useState<boolean>(true);

  // ANCHOR and OPEN logic with using statements
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const [anchorElTwo, setAnchorElTwo] = useState<null | HTMLElement>(null);
  const openTwo = Boolean(anchorElTwo);

  const [anchorElThree, setAnchorElThree] = useState<null | HTMLElement>(null);
  const openThree = Boolean(anchorElThree);

  const [anchorElFour, setAnchorElFour] = useState<null | HTMLElement>(null);
  const openFour = Boolean(anchorElFour);

  const [anchorElFifth, setAnchorElFifth] = useState<null | HTMLElement>(null);
  const openFifth = Boolean(anchorElFifth);

  const [anchorElSix, setAnchorElSix] = useState<null | HTMLElement>(null);
  const openSix = Boolean(anchorElSix);

  // SNACKBAR LIKE TOOLTIP
  const [openSnack, setOpenSnack] = useState(false);
  const [snackArray, setSnackArray] = useState<any>([]);

  // LOADING

  const [loading, setLoading] = useState<boolean>(true);

  const getRandomSymbolAndID = () => {
    var alphanumeric =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    var twentyEight = 28;
    for (let i = 0; i < twentyEight; ++i) {
      result += alphanumeric.charAt(Math.random() * alphanumeric.length);
    }

    return result;
  };

  let rowTableID = getRandomSymbolAndID();

  const {
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
  } = TableApiSort({ setTable, table });

  async function getDataDB() {
    const response = await fetch('/api/firebase-api');
    const data = await response.json();
    setTurnSwitch(!turnSwitch);
    console.log(data);
    return setTable(data);
  }

  console.log(table);

  useEffect(() => {
    defaultSort
      ? getDataDB().then(() => setLoading(false))
      : getDataDB().then(() => setLoading(true));
  }, []);

  const {
    submitData,
    deleteData,
    patchFirstName,
    patchLastName,
    patchEmail,
    patchGender,
    patchIp,
    patchCloseBoolean,
  } = IndexApiTable({ getDataDB, setLoading, table, rowTableID });

  const {
    handleEditFirstName,
    handleEditLastName,
    handleEditEmail,
    handleEditGender,
    handleEditIp,
    handleDelete,
    handleAdd,
    handleCloseBoolean,
  } = HandlersTable({
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
    patchCloseBoolean,
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
  });

  const handleCloseSnack = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnack(!openSnack);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickTwo = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElTwo(event.currentTarget);
  };
  const handleCloseTwo = () => {
    setAnchorElTwo(null);
  };

  const handleClickThree = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElThree(event.currentTarget);
  };
  const handleCloseThree = () => {
    setAnchorElThree(null);
  };

  const handleClickFour = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElFour(event.currentTarget);
  };
  const handleCloseFour = () => {
    setAnchorElFour(null);
  };

  const handleClickFifth = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElFifth(event.currentTarget);
  };
  const handleCloseFifth = () => {
    setAnchorElFifth(null);
  };

  const handleClickSix = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElSix(event.currentTarget);
  };
  const handleCloseSix = () => {
    setAnchorElSix(null);
  };

  const snArrayCheck = snackArray[0]
    ? snackArray[0]
    : snackArray[0] === Object
    ? 'User added!'
    : snackArray;
  // ? snackArray[0]
  // : snackArray.map(
  //     (item: {
  // id: number | null;
  // first_name: string | null;
  // last_name: string | null;
  // email: string | null;
  // gender: string | null;
  // ip_address: string | null;
  //     }) => {
  //       item.id;
  //       item.first_name;
  //       item.last_name;
  //       item.email;
  //       item.gender;
  //       item.ip_address;
  //     }
  //   );

  console.log(snackArray);
  const ID = useId();
  return (
    <Stack>
      <Stack display='flex' flexDirection='row'>
        {' '}
        <Snackbar
          message={`Table changed successfully! Value = ${snArrayCheck}`}
          autoHideDuration={4000}
          open={openSnack}
          onClose={handleCloseSnack}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
        />
        <Stack>
          {add ? (
            <Button
              onClick={() => {
                snackArray.pop(0, snackArray.length - 1);
                setAdd(!add);
              }}
              variant='contained'
              color='success'
            >
              Add User
            </Button>
          ) : (
            <Stack sx={{ padding: '10px' }} display='flex' flexDirection='row'>
              {add ? null : (
                <Button
                  onClick={() => {
                    snackArray.pop(0, snackArray.length - 1);
                    setAdd(!add);
                  }}
                  variant='contained'
                  color='error'
                >
                  Close
                </Button>
              )}
              <Button onClick={handleAdd} variant='contained' color='success'>
                Add
              </Button>
              <Stack id={ID}>
                <InputLabel htmlFor={`$${ID} - id`} />
                <TextField
                  size='small'
                  placeholder='id'
                  id={`$${ID} - id`}
                  defaultValue={id}
                  onChange={(e) => setId(e.target.value)}
                />
              </Stack>
              <Stack id={ID}>
                <InputLabel htmlFor={`$${ID} - First Name`} />
                <TextField
                  id={`$${ID} - First Name`}
                  size='small'
                  placeholder='first_name'
                  defaultValue={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Stack>
              <Stack id={ID}>
                <InputLabel htmlFor={`$${ID} - Last Name`} />
                <TextField
                  id={`$${ID} - Last Name`}
                  size='small'
                  placeholder='last_name'
                  defaultValue={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Stack>
              <Stack id={ID}>
                <InputLabel htmlFor={`$${ID} - Email`} />
                <TextField
                  id={`$${ID} - Email`}
                  size='small'
                  placeholder='email'
                  defaultValue={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Stack>
              <Stack id={ID}>
                <InputLabel htmlFor={`$${ID} - Gender`} />
                <TextField
                  id={`$${ID} - Gender`}
                  size='small'
                  placeholder='gender'
                  defaultValue={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
              </Stack>
              <Stack id={ID}>
                <InputLabel htmlFor={`$${ID} - IP`} />
                <TextField
                  id={`$${ID} - IP`}
                  size='small'
                  placeholder='ip'
                  defaultValue={ip}
                  onChange={(e) => setIp(e.target.value)}
                />
              </Stack>
            </Stack>
          )}
        </Stack>
        {/* SORT BY GREATER THAN OR EQUAL TO */}
        <Box>
          {sortGTE ? (
            <Button
              color='success'
              variant='contained'
              onClick={() => {
                snackArray.pop(0, snackArray.length - 1);
                setSortGTE(!sortGTE);
              }}
            >
              SortGTE
            </Button>
          ) : (
            <Box display={'flex'} flexDirection='column'>
              <TextField
                type='number'
                placeholder='Sort greater than or equal to'
                onChange={(e) => setId(e.target.value)}
              />
              <Button
                color='success'
                variant='contained'
                onClick={() => {
                  snackArray.push(id);
                  setOpenSnack(true);
                  setSortGTE(!sortGTE);
                  sortGTEData(id);
                }}
              >
                Toggle
              </Button>
              <Button
                color='error'
                variant='contained'
                onClick={() => {
                  setSortGTE(!sortGTE);
                }}
              >
                Cancel
              </Button>
            </Box>
          )}
        </Box>
        {/* SORT BY LESS THAN OR EQUAL TO */}
        <Box>
          {sortLTE ? (
            <Button
              color='success'
              variant='contained'
              onClick={() => {
                snackArray.pop(0, snackArray.length - 1);
                setSortLTE(!sortLTE);
              }}
            >
              SortLTE
            </Button>
          ) : (
            <Box display={'flex'} flexDirection='column'>
              <TextField
                type='number'
                placeholder='Sort lower than or equal to'
                onChange={(e) => setIdLTE(e.target.value)}
              />
              <Button
                color='success'
                variant='contained'
                onClick={() => {
                  snackArray.push(idLTE);
                  setOpenSnack(true);
                  setSortLTE(!sortLTE);
                  sortLTEData(idLTE);
                }}
              >
                Toggle
              </Button>
              <Button
                color='error'
                variant='contained'
                onClick={() => {
                  setSortLTE(!sortLTE);
                }}
              >
                Cancel
              </Button>
            </Box>
          )}
        </Box>
        {/* SORT BY ID NUM */}
        <Box>
          {sortNum ? (
            <Button
              color='success'
              variant='contained'
              onClick={() => {
                snackArray.pop(0, snackArray.length - 1);
                setSortNum(!sortNum);
              }}
            >
              SortNum
            </Button>
          ) : (
            <Box display={'flex'} flexDirection='column'>
              <TextField
                type='number'
                placeholder='Sort by id'
                onChange={(e) => setIdNum(e.target.value)}
              />
              <Button
                color='success'
                variant='contained'
                onClick={() => {
                  snackArray.push(idNum);
                  setSortNum(!sortNum);
                  sortIDNumData(idNum);
                  setOpenSnack(true);
                }}
              >
                Toggle
              </Button>
              <Button
                color='error'
                variant='contained'
                onClick={() => {
                  setSortNum(!sortNum);
                }}
              >
                Cancel
              </Button>
            </Box>
          )}
        </Box>
        {/* DEFAULT SORT */}
        <Box display='flex' flexDirection='column'>
          <Button
            variant='contained'
            color='info'
            onClick={() => {
              setDefaultSort(!defaultSort);
              getDataDB().then(() => setLoading(false));
            }}
          >
            Default sort
          </Button>
        </Box>
      </Stack>{' '}
      {loading ? (
        <Stack alignItems='center'>
          <CircularProgress
            size={'10rem'}
            color='success'
            aria-describedby='dialog-description'
          />
        </Stack>
      ) : (
        <TableContainer component={Paper}>
          {' '}
          {/* START OF TABLE */}
          <Table
            aria-label='simple table'
            aria-busy={true}
            id='dialog-description'
          >
            {close ? null : (
              <Button
                color='error'
                variant='contained'
                onClick={() => setClose(!close)}
              >
                Cancel
              </Button>
            )}

            {/* HEAD */}
            <HeadTable
              handleClickTwo={handleClickTwo}
              openTwo={openTwo}
              anchorElTwo={anchorElTwo}
              handleCloseTwo={handleCloseTwo}
              sortID={sortID}
              setSortID={setSortID}
              sortIDDescData={sortIDDescData}
              sortIDAscData={sortIDAscData}
              handleClick={handleClick}
              open={open}
              anchorEl={anchorEl}
              handleClose={handleClose}
              sortFN={sortFN}
              setSortFN={setSortFN}
              sortFirstNameDescData={sortFirstNameDescData}
              sortFirstNameAscData={sortFirstNameAscData}
              handleClickThree={handleClickThree}
              openThree={openThree}
              anchorElThree={anchorElThree}
              handleCloseThree={handleCloseThree}
              sortLN={sortLN}
              setSortLN={setSortLN}
              sortLastNameDescData={sortLastNameDescData}
              sortLastNameAscData={sortLastNameAscData}
              handleClickFour={handleClickFour}
              openFour={openFour}
              anchorElFour={anchorElFour}
              handleCloseFour={handleCloseFour}
              sortEmail={sortEmail}
              setSortEmail={setSortEmail}
              sortEmailDescData={sortEmailDescData}
              sortEmailAscData={sortEmailAscData}
              handleClickFifth={handleClickFifth}
              openFifth={openFifth}
              anchorElFifth={anchorElFifth}
              handleCloseFifth={handleCloseFifth}
              sortGender={sortGender}
              setSortGender={setSortGender}
              sortGenderDescData={sortGenderDescData}
              sortGenderAscData={sortGenderAscData}
              handleClickSix={handleClickSix}
              openSix={openSix}
              anchorElSix={anchorElSix}
              handleCloseSix={handleCloseSix}
              sortIP={sortIP}
              setSortIP={setSortIP}
              sortIPDescData={sortIPDescData}
              sortIPAscData={sortIPAscData}
            />
            {/* BODY */}
            <BodyTable
              firstName={firstName}
              lastName={lastName}
              email={email}
              gender={gender}
              ip={ip}
              del={del}
              table={table}
              setEmail={setEmail}
              setGender={setGender}
              setDel={setDel}
              setFirstName={setFirstName}
              setLastName={setLastName}
              setIp={setIp}
              handleDelete={handleDelete}
              handleEditFirstName={handleEditFirstName}
              handleEditLastName={handleEditLastName}
              handleEditEmail={handleEditEmail}
              handleEditGender={handleEditGender}
              handleEditIp={handleEditIp}
              handleCloseBoolean={handleCloseBoolean}
            />
          </Table>
        </TableContainer>
      )}
    </Stack>
  );
}
