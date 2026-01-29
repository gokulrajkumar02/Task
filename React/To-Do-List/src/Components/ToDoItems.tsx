import { Component } from "react";

type val = {
  Items: string;
  list: string[];
  list1: string[];
  bool: boolean;
  editing : string
  // bool : any
};

class ToDoItems extends Component<any, val> {
  constructor(prop: string) {
    super(prop);
    this.state = {
      Items: "",
      list: [],
      list1: [],
      bool: false,
      editing:""
    };
  }

  change = (event: any): void => {
    this.setState({ Items: event.target.value });
  };
  submit = (): void => {
    if (this.state.Items === "") return;
    const newArr = [...this.state.list, this.state.Items];
    this.setState({
      list: newArr,
      Items: "",
    });

    console.log(this.state.list);
  };
  edit = (index: number) => {
    if(this.state.bool) return;
    this.setState({
      bool: true,
    });

    this.setState(prev =>({
        list: prev.list.slice(0, index+1),
        list1: prev.list.slice(index + 1),
        editing : prev.list[index]
    }));
    console.log(this.state.list1);
  };

 
  delete = (index: number): void => {
    if(this.state.bool) return
    const newArr = this.state.list.filter((item, i) => i !== index);

    this.setState({
      list: newArr,
    });
  };


   handleEdit = (event : any) => {
    this.setState({editing : event.target.value})
   }

    handleEditSubmit = () =>{
        this.setState(prev => ({
            list : [...prev.list.slice(0,prev.list.length-1),prev.editing,...prev.list1],
            bool : false,
            list1 : [],
            editing : ""

        }))
    }

  render() {
    return (
      <>
        <label htmlFor="">Items : </label> &nbsp;{" "}
        <input type="text" value={this.state.Items} onChange={this.change} />
        &nbsp;
        <button onClick={this.submit}>Click to add</button>
        {this.state.list.map((items, index) => (
          <li key={index}>
            <h2>{items}</h2>
            <button onClick={() => this.edit(index)}>Edit</button>
            <button onClick={() => this.delete(index)}>Delete</button>
          </li>
        ))}
        {this.state.bool ? (
          <form>
            <label htmlFor="">Editing : </label> &nbsp; <input type="text" value = {this.state.editing} onChange={(event) => this.handleEdit(event)}/>
            &nbsp;
            <button onClick={this.handleEditSubmit}>Update</button> 
          </form>
        ) : (
          ""
        )}
        {this.state.bool ?
         this.state.list1.map((items, index) => 
              <li key={index}>
                <h2>{items}</h2>
                <button onClick={() => this.edit(index)}>Edit</button>
                <button onClick={() => this.delete(index)}>Delete</button>
              </li>
            )
          : ""}
      </>
    );
  }
}
export default ToDoItems;
