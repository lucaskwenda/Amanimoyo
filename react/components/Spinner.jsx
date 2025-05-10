
function Spinner() {
  return( 
  <div className="loading">
    <div className="dot"></div>
    <div className="dot"></div>
    <div className="dot"></div>
</div>
 );
}


const root = ReactDOM.createRoot(document.getElementById('spinner')).render(<Spinner/>)

