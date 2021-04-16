import { memo, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import MaximizeIcon from 'components/Icons/MaximizeIcon'
import FullImage from '../FullImage'
import { IMAGE_PLACEHOLDER_IMAGE_PATH } from 'utils/constants/image-paths'
import { FILE_TYPES } from 'utils/constants/file-types';

const useStyles = makeStyles((theme) => ({
  image: {
    height: 450,
    maxWidth: '100%',
    objectFit: 'contain',
    borderRadius: 16,
    border: `4px solid ${theme.palette.primary.main}`,
    [theme.breakpoints.down('xs')]: {
      height: 350,
    }
  },
  extendButton: {
    position: 'absolute',
    top: 0,
    right: 20,
  }
}));

const NFTImage = ({
  good
}) => {
  const classes = useStyles();

  const [fullScreen, setFullScreen] = useState(false);

  return (
    <>
      {good.type === FILE_TYPES.IMAGE.VALUE
        ? (
          <img
            src={good.image || IMAGE_PLACEHOLDER_IMAGE_PATH}
            alt='good production'
            className={classes.image}
          />
        ) : (
          <video autoPlay loop controls className={classes.image}>
            <source src={good.image} />
          </video>
        )
      }
      <MaximizeIcon
        onClick={() => setFullScreen(true)}
        className={classes.extendButton}
      />
      {
        fullScreen &&
        <FullImage
          good={good}
          open={fullScreen}
          setOpen={setFullScreen}
        />
      }
    </>
  )
}

export default memo(NFTImage)