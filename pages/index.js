import '../styles/style.scss'

import numArr1 from '../scripts/numArr1'
import numArr2 from '../scripts/numArr3'
import numArr3 from '../scripts/numArr3'

const numStrand1 = numArr1.map((num, i )=> (
  <li key={i}>{num}</li>
));

const numStrand2 = numArr2.map((num, i )=> (
  <li key={i}>{num}</li>
));

const numStrand3 = numArr3.map((num, i )=> (
  <li key={i}>{num}</li>
));

export default () =>
    
    <div className="wrapper">

      <div className="strand first">
        <ul>
          {numStrand1}
        </ul>
      </div>

      <div className="strand second">
        <ul>
          {numStrand2}
        </ul>
      </div>

      <div className="strand third">
        <ul>
          {numStrand3}
        </ul>
      </div>

      <div className="strand fourth">
        <ul>
          {numStrand1}
        </ul>
      </div>

      <div className="strand fifth">
        <ul>
          {numStrand2}
        </ul>
      </div>

      <div className="strand sixth">
        <ul>
          {numStrand3}
        </ul>
      </div>

      <div className="strand seventh">
        <ul>
          {numStrand1}
        </ul>
      </div>

      <div className="strand eighth">
        <ul>
          {numStrand2}
        </ul>
      </div>

      <div className="strand ninth">
        <ul>
          {numStrand3}
        </ul>
      </div>
      
      <div className="strand tenth">
        <ul>
          {numStrand1}
        </ul>
      </div>

      <div className="strand eleventh">
        <ul>
          {numStrand2}
        </ul>
      </div>
      
      <div className="strand twelfth">
        <ul>
          {numStrand3}
        </ul>
      </div>

      <div className="strand thirteenth">
        <ul>
          {numStrand1}
        </ul>
      </div>

{/* <style jsx>{`
`}</style> */}
</div>
