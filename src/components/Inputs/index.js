import './input.css'
const Input = ({ errorMessage, onChange, ...inputProps }) => {
  // const [focused, setFocused] = useState(false)

  /*   const handleFocused = () => {
      setFocused(true)
    } */

  return (
    <div  style={{display: 'flex', flexDirection:'column'}}>
  
      <input
        {...inputProps}
        required
        onChange={onChange}
        type={inputProps.type === 'email' ? 'email' : inputProps.type}
        style={{ marginRight: inputProps.type === 'date' ? '10px !important' : '', width: '130px', outline: 'none', borderRadius: '5px', background: '#FFF', width: '180px' }}
      />
      <span style={{
        marginBottom: 'px',
        textAlign: 'left',
        display: "none",
        color: '#d72923',
        fontSize: '10x'
      }}>{errorMessage}</span>
    </div>
    

  );
}

export default Input;