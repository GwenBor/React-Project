import "./App.css";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  selectRows: {
    padding: "10px",
  },
}));

export default function TableComponent(props) {
  const classes = useStyles();
  //const classes = useStyles();
  //console.log(props.apiData)
  const head = ["Country", "Continent", "Population", "Population Growth"];
  var counter = -1;
  var dic = {};
  //const [sorted, setSorted] = useState("DESC");

  return (
    <div>
      <Table id="table">
        <TableHead>
          <TableRow id="tableHead">
            {head.map((h) => (
              <TableCell key={counter++}>{h}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.apiData.map((element) => (
            <TableRow key={counter++}>
              <TableCell>{element.Country}</TableCell>
              <TableCell>{element.Continent}</TableCell>
              <TableCell>{element.Population}</TableCell>
              <TableCell>{element.PopulationGrowth}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.selectConatiner}></div>
    </div>
  );
}
