import { Typography } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';
import { NothingSelectedView } from '../views/NothingSelectedView';

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>
        Commodo fugiat do ex minim eu proident voluptate labore Lorem mollit ad
        duis. */}
      <NothingSelectedView />
    </JournalLayout>
  );
};
