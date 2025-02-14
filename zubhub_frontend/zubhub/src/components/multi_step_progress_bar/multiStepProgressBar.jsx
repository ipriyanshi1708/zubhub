import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { styles } from '../../assets/js/styles/views/create_activity/createActivityStyles';
import { Grid, Box } from '@material-ui/core';
import commonStyles from '../../assets/js/styles';
import {
  calcAlignLeft,
  isCompleted,
  widthToColorPercent,
  arrayFromStepCount,
} from './multiStepProgressBarScripts';
const useStyles = makeStyles(styles);

function MultiStepProgressBar(props) {
  // const [state, setState] = useState({...props})
  // useEffect(() => {
  //   setState({...props})
  // }, [props])
  
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.activityCreationProgressBar}>
        <Box
          className={classes.activityCreationProgressBarScroller}
          style={{ width: widthToColorPercent(props.step, props.stepCount) }}
        />
        {arrayFromStepCount(props.stepCount).map((step, index) => (
          <Box
            className={classes.progressNumberStyle}
            key={index}
            style={{
              backgroundColor: isCompleted(step, props.step)
                ? '#00B8C4'
                : 'white',
              color: isCompleted(step, props.step) ? 'white' : '#00B8C4',
              left: `calc(${calcAlignLeft(step - 1, props.stepCount)} - 15px) `,
            }}
          >
            {isCompleted(step, props.step) ? `\u2713` : step}
          </Box>
        ))}
      </Box>
    </div>
  );
}

export default MultiStepProgressBar;
