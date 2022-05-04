import {
  Button,
  TableCell,
  TableRow,
  TableHead,
  Menu,
  MenuItem,
} from '@mui/material';

export default function HeadTable({
  handleClickTwo,
  openTwo,
  anchorElTwo,
  handleCloseTwo,
  sortID,
  setSortID,
  sortIDDescData,
  sortIDAscData,

  handleClick,
  open,
  anchorEl,
  handleClose,
  sortFN,
  setSortFN,
  sortFirstNameDescData,
  sortFirstNameAscData,

  handleClickThree,
  openThree,
  anchorElThree,
  handleCloseThree,
  sortLN,
  setSortLN,
  sortLastNameDescData,
  sortLastNameAscData,

  handleClickFour,
  openFour,
  anchorElFour,
  handleCloseFour,
  sortEmail,
  setSortEmail,
  sortEmailDescData,
  sortEmailAscData,

  handleClickFifth,
  openFifth,
  anchorElFifth,
  handleCloseFifth,
  sortGender,
  setSortGender,
  sortGenderDescData,
  sortGenderAscData,

  handleClickSix,
  openSix,
  anchorElSix,
  handleCloseSix,
  sortIP,
  setSortIP,
  sortIPDescData,
  sortIPAscData,
}) {
  return (
    <TableHead>
      <TableRow>
        <TableCell>
          <Button
            color='inherit'
            id='resources-button'
            onClick={handleClickTwo}
            // in this case if boolen (open) is true so handle it with resources-menu if no set it to undefined
            aria-controls={openTwo ? 'resources-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={openTwo ? 'true' : undefined}
          >
            ID
          </Button>
        </TableCell>
        <Menu
          id='resources-menu'
          anchorEl={anchorElTwo}
          open={openTwo}
          onClose={handleCloseTwo}
          MenuListProps={{
            'aria-labelledby': 'resources-button',
          }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={handleCloseTwo}>
            <TableCell
              onClick={() => {
                sortIDAscData();
                setSortID(!sortID);
              }}
              sx={{ cursor: 'pointer' }}
            >
              ID (ASC)
            </TableCell>
          </MenuItem>
          <MenuItem onClick={handleCloseTwo}>
            {' '}
            <TableCell
              onClick={() => {
                sortIDDescData();
                setSortID(!sortID);
              }}
              sx={{ cursor: 'pointer' }}
            >
              ID (DESC)
            </TableCell>
          </MenuItem>
        </Menu>
        <TableCell>
          <Button
            color='inherit'
            id='resources-button'
            onClick={handleClick}
            // in this case if boolen (open) is true so handle it with resources-menu if no set it to undefined
            aria-controls={open ? 'resources-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
          >
            First Name
          </Button>
        </TableCell>
        <Menu
          id='resources-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'resources-button',
          }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={handleClose}>
            <TableCell
              onClick={() => {
                sortFirstNameAscData();
                setSortFN(!sortFN);
              }}
              sx={{ cursor: 'pointer' }}
            >
              First Name (ASC)
            </TableCell>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            {' '}
            <TableCell
              onClick={() => {
                sortFirstNameDescData();
                setSortFN(!sortFN);
              }}
              sx={{ cursor: 'pointer' }}
            >
              First Name (DESC)
            </TableCell>
          </MenuItem>
        </Menu>
        <TableCell>
          <Button
            color='inherit'
            id='resources-button'
            onClick={handleClickThree}
            // in this case if boolen (open) is true so handle it with resources-menu if no set it to undefined
            aria-controls={openThree ? 'resources-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={openThree ? 'true' : undefined}
          >
            Last Name
          </Button>
        </TableCell>
        <Menu
          id='resources-menu'
          anchorEl={anchorElThree}
          open={openThree}
          onClose={handleCloseThree}
          MenuListProps={{
            'aria-labelledby': 'resources-button',
          }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={handleCloseThree}>
            <TableCell
              onClick={() => {
                sortLastNameAscData();
                setSortLN(!sortLN);
              }}
              sx={{ cursor: 'pointer' }}
            >
              Last Name (ASC)
            </TableCell>
          </MenuItem>
          <MenuItem onClick={handleCloseThree}>
            {' '}
            <TableCell
              onClick={() => {
                sortLastNameDescData();
                setSortLN(!sortLN);
              }}
              sx={{ cursor: 'pointer' }}
            >
              Last Name (DESC)
            </TableCell>
          </MenuItem>
        </Menu>
        {/* EMAIL */}
        <TableCell>
          <Button
            color='inherit'
            id='resources-button'
            onClick={handleClickFour}
            // in this case if boolen (open) is true so handle it with resources-menu if no set it to undefined
            aria-controls={openFour ? 'resources-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={openFour ? 'true' : undefined}
          >
            Email
          </Button>
        </TableCell>
        <Menu
          id='resources-menu'
          anchorEl={anchorElFour}
          open={openFour}
          onClose={handleCloseFour}
          MenuListProps={{
            'aria-labelledby': 'resources-button',
          }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={handleCloseFour}>
            <TableCell
              onClick={() => {
                sortEmailAscData();
                setSortEmail(!sortEmail);
              }}
              sx={{ cursor: 'pointer' }}
            >
              Email (ASC)
            </TableCell>
          </MenuItem>
          <MenuItem onClick={handleCloseFour}>
            {' '}
            <TableCell
              onClick={() => {
                sortEmailDescData();
                setSortEmail(!sortEmail);
              }}
              sx={{ cursor: 'pointer' }}
            >
              Email (DESC)
            </TableCell>
          </MenuItem>
        </Menu>
        {/* GENDER */}
        <TableCell>
          <Button
            color='inherit'
            id='resources-button'
            onClick={handleClickFifth}
            // in this case if boolen (open) is true so handle it with resources-menu if no set it to undefined
            aria-controls={openFifth ? 'resources-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={openFifth ? 'true' : undefined}
          >
            Gender
          </Button>
        </TableCell>
        <Menu
          id='resources-menu'
          anchorEl={anchorElFifth}
          open={openFifth}
          onClose={handleCloseFifth}
          MenuListProps={{
            'aria-labelledby': 'resources-button',
          }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={handleCloseFifth}>
            <TableCell
              onClick={() => {
                sortGenderAscData();
                setSortGender(!sortGender);
              }}
              sx={{ cursor: 'pointer' }}
            >
              Gender (ASC)
            </TableCell>
          </MenuItem>
          <MenuItem onClick={handleCloseFifth}>
            {' '}
            <TableCell
              onClick={() => {
                sortGenderDescData();
                setSortGender(!sortGender);
              }}
              sx={{ cursor: 'pointer' }}
            >
              Gender (DESC)
            </TableCell>
          </MenuItem>
        </Menu>
        {/* IP_ADDRESS */}
        <TableCell>
          <Button
            color='inherit'
            id='resources-button'
            onClick={handleClickSix}
            // in this case if boolen (open) is true so handle it with resources-menu if no set it to undefined
            aria-controls={openSix ? 'resources-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={openSix ? 'true' : undefined}
          >
            IP
          </Button>
        </TableCell>
        <Menu
          id='resources-menu'
          anchorEl={anchorElSix}
          open={openSix}
          onClose={handleCloseSix}
          MenuListProps={{
            'aria-labelledby': 'resources-button',
          }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={handleCloseSix}>
            <TableCell
              onClick={() => {
                sortIPAscData();
                setSortIP(!sortIP);
              }}
              sx={{ cursor: 'pointer' }}
            >
              IP (ASC)
            </TableCell>
          </MenuItem>
          <MenuItem onClick={handleCloseSix}>
            {' '}
            <TableCell
              onClick={() => {
                sortIPDescData();
                setSortIP(!sortIP);
              }}
              sx={{ cursor: 'pointer' }}
            >
              IP (DESC)
            </TableCell>
          </MenuItem>
        </Menu>
      </TableRow>
    </TableHead>
  );
}
