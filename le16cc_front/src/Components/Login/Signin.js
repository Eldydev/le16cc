import React, { Component } from 'react';

class NewContactForm extends Component {
    constructor() {
      super();
      this.state = {
        nom: "",
        prénom: "",
        email: "",
        rue: "",
        ville: "",
        cp: "",
        pays: "",
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      this.setState({
        [name]: value
      });
    }
  
    /*CreatContact() {
      var date = new Date();
      const options = { timezone: 'Europe/Paris', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', hour12: false, minute: '2-digit', second: '2-digit' };
      date = date.toLocaleDateString('en-CA', options);
      console.log(date)
      date = date.toString(date)
      date = date.replaceAll('/', '-')
      date = date.replace(',', '')
      console.log(date)
  
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nom: this.state.nom,
          prénom: this.state.prénom,
          email: this.state.email,
          tel: this.state.tel,
          société: this.state.société,
          rue: this.state.rue,
          ville: this.state.ville,
          cp: this.state.cp,
          pays: this.state.pays,
          rueadl: this.state.rueadl,
          villeadl: this.state.villeadl,
          cpadl: this.state.cpadl,
          paysadl: this.state.paysadl,
          date: date
        })
      };
      fetch('https://api.suivi-encheres-services.fr/v1/create-contact', requestOptions)
        .then(console.log('body: ', requestOptions))
        .then(response => response.json())
        .then(data => {
          console.log(data)
          if (data.result == 'succes') {
            document.getElementById('ConfirmNewContact').style.display ="block"
          }
        })
  
    }*/
  
    render() {
      return (
        <div>
          <p>Inscrivez vous et agissez pour le 16e !</p>
          <form onSubmit={this.handleSubmit}>
            <label>
              Nom:
              <input
                name="nom"
                type="textarea"
                value={this.state.value}
                onChange={this.handleInputChange} />
            </label>
            <label>
              Prénom:
              <input
                name="prénom"
                type="textarea"
                value={this.state.value}
                onChange={this.handleInputChange} />
            </label>
            <label>
              Email:
              <input
                name="email"
                type="textarea"
                value={this.state.value}
                onChange={this.handleInputChange} />
            </label>
            <p>Adresse</p>
            <label>
              Rue:
              <input
                name="rue"
                type="textarea"
                value={this.state.value}
                onChange={this.handleInputChange} />
            </label>
            <label>
              Ville:
              <input
                name="ville"
                type="textarea"
                value={this.state.value}
                onChange={this.handleInputChange} />
            </label>
            <label>
              Code Postal:
              <input
                name="cp"
                type="textarea"
                value={this.state.value}
                onChange={this.handleInputChange} />
            </label>
            <label>
              pays:
              <input
                name="pays"
                type="textarea"
                value={this.state.value}
                onChange={this.handleInputChange} />
            </label>

  
            <input id="CFB" type="button" value="Je valide" onClick={(e) => this.CreatContact()} />
          </form>
        </div>
      );
    }
  }
  
  export default NewContactForm