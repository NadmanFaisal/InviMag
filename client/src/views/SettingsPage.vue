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

        <div class="col-10 right-section bg-white">

          <div class="col-5 profile-overview-container">
            <div class="col-11 silly-rectangle">
            </div>

            <div class="profile-picture">
                <img src="/home/nadman/OneDrive_Chalmers/Semester 3/DIT342 - Web development/group-17-web/client/src/images/profile-picture.jpeg" alt="Profile Picture" class="img-fluid rounded-circle" />
            </div>
            <div class="business-owner-details">
              <h2 class="profile-name">John Doe</h2>
              <p class="profile-title">Business Owner</p>
            </div>
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

.silly-rectangle {
  display: flex;
  height: 80px;
  flex-direction: column;
  border-radius: 10px;
  background: #37F;
  position: absolute;
}

.profile-overview-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  border-radius: 15px;
  border: var(--sds-size-stroke-border) solid rgba(0, 0, 0, 0.10);
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: relative;
}

.profile-picture {
  margin-top: 5%;
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 50%;
  z-index: 2;
}

.profile-picture img {
  width: 100%;
  height: 100%;
}

.profile-name {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #787676;

  text-align: center;
  font-family: "Istok Web";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 10px 0;
}

.profile-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #787676;

  text-align: center;
  font-family: "Istok Web";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 10px;
}

.test-container {
  text-align: center;
  padding-top: 50px;
}
</style>
