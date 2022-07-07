// tasks
// choisir une base de données légère
// implementer un langage serveur Node.js
// créer un outil pour facilement sourcer les données
// modéliser la bd
// lister l'existant avec un fichier excel qui créera la requete d'insert
//

//make restfull en node js

------
t_item
itm_id  int auto increment
itm_label varchar(50)
itm_desc varchar(500)
itm_year int
itm_creator varchar(50)
itm_type  int fk t_type
itm_format int fk t_format
itm_device int fk t_device
itm_location int fk t_location
itm_image varchar(25)
itm_sample varchar(25)
itm_used boolean 
itm_lended boolean

--

t_device
dvc_id
dvc_label
dvc_image

xbox one
pc

--
t_type  
typ_id
typ_parent_id ???
typ_label
typ_image

Jeux Video / Gaming
Films
Séries
Livres
Musique
Jeux de société
> video des regles du jeu
Photo


Vidéo
--Films
--Séries


--
t_format
fmt_id
fmt_label
fmt_image

cd /bluray /ebook / iso / mp3
---

t_genre
gnr_id
gnr_parent_id
gnr_label
gnr_image

---

t_location
loc_id
loc_label
loc_image

---
t_item_genre
itm_id
gnr_id



creator
editeur
auteur
artiste

poster_ 
slide_
trailer_ 

