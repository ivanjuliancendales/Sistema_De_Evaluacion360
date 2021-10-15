<!-- Vista del Frontend para mostrar reporte de la aplicación web -->
<template>
  <div class="row">
    <div class="col-md-12">
        <thead class="thead-dark">
          <h3 class="text-center">Reporte de Evaluación</h3>
          <br><br>
        </thead>

        <tbody>
            <!-- Gráfica embebida desde Mongo DB Atlas. Hecha con los documentos de la base de datos. -->
            <iframe style="background: #FFFFFF;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);" width="640" height="480" src="https://charts.mongodb.com/charts-project-0-htflo/embed/charts?id=5a5ea079-ce5a-410e-905d-c84a317adf05&autoRefresh=60&theme=light"></iframe>
            <!-- Tabla embebida desde Mongo DB Atlas. Hecha con los documentos de la base de datos. -->
            <iframe style="background: #FFFFFF;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);" width="640" height="480" src="https://charts.mongodb.com/charts-project-0-htflo/embed/charts?id=b9c622b7-220d-4de0-a5e6-2d0a7f2ab394&autoRefresh=60&theme=light"></iframe>
        </tbody>

    </div>
  </div>
</template>



<script>
import axios from "axios";

export default {
  data() {
    return { Employees: [] 
    };
  },
  created() {
    let apiURL = "http://localhost:4000/api";
    axios
      .get(apiURL)
      .then((res) => {
        this.Employees = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    deleteEmployee(id) {
      let apiURL = `http://localhost:4000/api/delete-employee/${id}`;
      let indexOfArrayItem = this.Employees.findIndex((i) => i._id === id);
      
      if (window.confirm("Do you really want to delete?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.Employees.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style>
.btn-success {
  margin-right: 10px;
}
</style>