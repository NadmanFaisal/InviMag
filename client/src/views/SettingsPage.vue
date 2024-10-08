<template>
  <div class="settings-page">
    <div class="container-fluid">
      <div class="row min-vh-100">

        <div class="col-2 left-section">
          <div class="top-navigation-container">
            <div class="card">
              <a class="nav-link" href="/">Home</a>
            </div>
            <div class="card">
              <a class="nav-link" href="#">Inventory</a>
            </div>
            <div class="card">
              <a class="nav-link" href="#">Suppliers</a>
            </div>
            <div class="card">
              <a class="nav-link" href="#">Products</a>
            </div>
            <div class="card">
              <a class="nav-link" href="#">Order</a>
            </div>
          </div>

          <div class="bottom-navigation-container">
            <div class="card settings-card">
              <a class="nav-link active" href="#">Settings</a>
            </div>
            <div class="card">
              <a class="nav-link" href="#">Log out</a>
            </div>
          </div>

        </div>

        <div class="col-9 right-section bg-white">
          <div class="test-container">
            <h2>Settings</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SettingsPage'
}
</script>

<style scoped>
.row {
  margin: 0;
}

.container-fluid {
  padding: 0;
}

.left-section {
  border-radius: 0px 50px 50px 0px;
  background: #37f;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
}

.top-navigation-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 40%;
}

.top-navigation-container .card {
  background: #37f;
  text-align: center;
  padding: 15px;
  flex: 1;
  border: none;
}

.top-navigation-container .nav-link {
  color: var(--Schemes-On-Primary, #fff);
  font-family: 'Istok Web';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
}

.top-navigation-container .nav-link:hover {
  color: #0056b3;
  text-decoration: none;
}

.bottom-navigation-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 100%;
}

.bottom-navigation-container .card {
  background: #37f;
  text-align: center;
  padding: 15px;
  flex: 1;
  border: none;
}

.bottom-navigation-container .nav-link {
  color: var(--Schemes-On-Primary, #fff);
  font-family: 'Istok Web';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
}

.bottom-navigation-container .nav-link:hover {
  color: #0056b3;
  text-decoration: none;
}

.bottom-navigation-container .settings-card {
  background: linear-gradient(
    to right,
    #ffffffd8 0%,
    #e0e0e000 50%,
    #ffffff00 100%
  );
  text-align: center;
  padding: 15px;
}

.card:hover {
  background: linear-gradient(
    to right,
    #ffffff3a 0%,
    #e0e0e000 50%,
    #ffffff00 100%
  );
}

.right-section {
  padding: 20px;
}

.test-container {
  text-align: center;
  padding-top: 50px;
}
</style>
