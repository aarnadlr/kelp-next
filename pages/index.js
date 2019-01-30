import '../styles/style.scss'

// Import the number array
import numArr from '../scripts/numArr'
import Card from '../Components/Card';
// Create new strand arrays
const strand1=[];
const strand2=[];
const strand3=[];
const strand4=[];
const strand5=[];

// For loop pushes 32 numbers at a time, inside <li>s, into each array
for (let i = 0; i < 32; i++) {
  strand1.push(<li key={i}>{numArr[i]}</li>)
};
for (let i = 32; i < 64; i++) {
  strand2.push(<li key={i}>{numArr[i]}</li>)
};
for (let i = 64; i < 96; i++) {
  strand3.push(<li key={i}>{numArr[i]}</li>)
};
for (let i = 96; i < 128; i++) {
  strand4.push(<li key={i}>{numArr[i]}</li>)
};
for (let i = 128; i < 160; i++) {
  strand5.push(<li key={i}>{numArr[i]}</li>)
};

export default () =>
    <div className="wrapper">

      <Card/>
      <div className="strand first">
        <ul>
          {strand1}
        </ul>
      </div>

      <div className="strand second">
        <ul>
          {strand2}
        </ul>
      </div>

      <div className="strand third">
        <ul>
          {strand3}
        </ul>
      </div>

      <div className="strand fourth">
        <ul>
          {strand4}
        </ul>
      </div>

      <div className="strand fifth">
        <ul>
          {strand5}
        </ul>
      </div>

      <div className="strand sixth">
        <ul>
          {strand1}
        </ul>
      </div>

      <div className="strand seventh">
        <ul>
          {strand2}
        </ul>
      </div>

      <div className="strand eighth">
        <ul>
          {strand3}
        </ul>
      </div>

      <div className="strand ninth">
        <ul>
          {strand4}
        </ul>
      </div>
      
      <div className="strand tenth">
        <ul>
          {strand5}
        </ul>
      </div>

      <div className="strand eleventh">
        <ul>
          {strand1}
        </ul>
      </div>
      
      <div className="strand twelfth">
        <ul>
          {strand2}
        </ul>
      </div>

      <div className="strand thirteenth">
        <ul>
          {strand3}
        </ul>
      </div>
</div>
