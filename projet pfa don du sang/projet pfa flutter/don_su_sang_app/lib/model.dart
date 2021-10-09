class Personne {

  int cin;
  String nom;
  String prenom;
  DateTime dateNaissance;
  Null typeSang;
  String email;
  String password;
  String telephone;
  String sexe;

  Personne(
      {
        this.cin,
        this.nom,
        this.prenom,
        this.dateNaissance,
        this.typeSang,
        this.email,
        this.password,
        this.telephone,
        this.sexe});
  Personne.fromJson(Map<String, dynamic> json) {

    cin = json['cin'];
    nom = json['nom'];
    prenom = json['prenom'];
    dateNaissance = json['dateNaissance'];
    typeSang = json['typeSang'];
    email = json['email'];
    password = json['password'];
    telephone = json['telephone'];
    sexe = json['sexe'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();

    data['cin'] = this.cin.toString();
    data['nom'] = this.nom;
    data['prenom'] = this.prenom;
    data['dateNaissance'] = this.dateNaissance.toString();
    data['typeSang'] = this.typeSang;
    data['email'] = this.email;
    data['password'] = this.password;
    data['telephone'] = this.telephone;
    data['sexe'] = this.sexe;
    return data;
  }
}