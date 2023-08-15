import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import { Routes, Route, useLocation } from "react-router-dom";
import Accueil from "./acceuil/acceuil";
import Profil from "./profil/profil";
import ListStudents from "./etudiant/list-student/list-student";
import ListUniversity from "./university/list-university/list-university";
import AddStudent from "./etudiant/add-student/add-student";
import AddUniversity from "./university/add-university/add-university";

const Dashboard = () => {

  const location = useLocation();
  const [breadcrumpChild, setBreadcrumpChild] = useState(null);

  let childrenBreadCrump = location.pathname.split('/').join(" ").trim().split(" ").map(loca => {
    return {
      libelle: loca
    }
  })

  useEffect(() => {
    setBreadcrumpChild(childrenBreadCrump);
  }, []);

  return (
    <div>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="h-[92vh] mb-4 rounded bg-gray-50 dark:bg-gray-800">
          <Routes>
            <Route path="/accueil" element={<Accueil />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/students/list" element={<ListStudents />}/>
            <Route path="/students/add" element={<AddStudent />}/>
            <Route path="/university/list" element={<ListUniversity />}/>
            <Route path="/university/add" element={<AddUniversity />}/>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
