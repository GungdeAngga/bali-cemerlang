import React,{useState} from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';

export default function FlightCheckIn() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);
  return (
    <div>
        <DateRange
          onChange={item => setState([item.selection])}
          editableDateInputs={true}
          moveRangeOnFirstSelection={false}
          ranges={state}
        />
    </div>
  )
}
