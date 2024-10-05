<template>
    <NuxtLayout>
        <main>
            <div class="profile-container mt-2">
                <div class="breadcrumbs">
                    <nuxt-link to="/">Home</nuxt-link> / <span>My Account</span>
                </div>

                <div class="profile-wrapper">
                    <aside class="sidebar">
                        <nav>
                            <h3>Manage My Account</h3>
                            <ul>
                                <li><nuxt-link to="/profile" class="active-link">My Profile</nuxt-link></li>
                                <li><nuxt-link to="/payment-options">My Payment Options</nuxt-link></li>
                            </ul>

                            <h3>My Orders</h3>
                            <ul>
                                <li><nuxt-link to="/returns">My Returns</nuxt-link></li>
                                <li><nuxt-link to="/cancellations">My Cancellations</nuxt-link></li>
                            </ul>

                            <h3>My Wishlist</h3>
                        </nav>
                    </aside>

                    <main class="profile-content">
                        <h2>Edit Your Profile</h2>
                        <form @submit.prevent="saveChanges">
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="firstName">First Name</label>
                                    <input type="text" id="firstName" v-model="form.firstName" />
                                </div>
                                <div class="form-group">
                                    <label for="lastName">Last Name</label>
                                    <input type="text" id="lastName" v-model="form.lastName" />
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" id="email" v-model="form.email" />
                                </div>
                                <div class="form-group">
                                    <label for="address">Address</label>
                                    <input type="text" id="address" v-model="form.address" />
                                </div>
                            </div>

                            <h3>Password Changes</h3>
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="currentPassword">Current Password</label>
                                    <input type="password" id="currentPassword" v-model="form.currentPassword" />
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group">
                                    <label for="newPassword">New Password</label>
                                    <input type="password" id="newPassword" v-model="form.newPassword" />
                                </div>
                                <div class="form-group">
                                    <label for="confirmNewPassword">Confirm New Password</label>
                                    <input type="password" id="confirmNewPassword" v-model="form.confirmNewPassword" />
                                </div>
                            </div>

                            <div class="button-group">
                                <button type="button" @click="cancel">Cancel</button>
                                <button type="submit" class="save-button">Save Changes</button>
                            </div>
                        </form>
                    </main>
                </div>
            </div>
        </main>
    </NuxtLayout>
</template>

<script>
export default {
    data() {
        return {
            form: {
                firstName: '',
                lastName: '',
                email: '',
                address: '',
                currentPassword: '',
                newPassword: '',
                confirmNewPassword: '',
            }
        };
    },
    methods: {
        saveChanges() {
            // Here, you can make an API request to save the changes.
            console.log('Saving profile:', this.form);
        },
        cancel() {
            // Optionally, you can reset the form or navigate away
            console.log('Cancel changes');
        }
    }
};
</script>
<style scoped>
.profile-container {
    padding: 20px;
    border-radius: 8px;
}

.breadcrumbs {
    margin-bottom: 20px;
    font-size: 14px;
}

.breadcrumbs a {
    text-decoration: none;
    color: #555;
}

.breadcrumbs span {
    margin: 0 5px;
    color: #DB4444;
}

.profile-wrapper {
    display: flex;
    border-radius: 8px;
}

.sidebar {
    width: 250px;
    margin-right: 20px;
    border-radius: 8px;
    padding: 15px;
}

.sidebar h3 {
    margin-bottom: 10px;
    font-size: 18px;
    color: #333;
}

.sidebar ul {
    list-style-type: none;
    padding: 0;
}

.sidebar ul li {
    margin-bottom: 10px;
}

.sidebar ul li a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: color 0.3s;
}

.sidebar ul li a:hover {
    color: #DB4444;
}

.sidebar ul li a.active-link {
    color: #FF5722;
}

.profile-content {
    flex: 1;
    border-radius: 8px;
    padding: 20px;
}

.profile-content h2 {
    margin-bottom: 20px;
    font-size: 24px;
    color: #333;
}

.form-row {
    display: flex;
    margin-bottom: 20px;
}

.form-group {
    flex: 1;
    margin-right: 20px;
}

.form-group:last-child {
    margin-right: 0;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #555;
}

.form-group input {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
    transition: border-color 0.3s;
}

.form-group input:focus {
    border-color: #DB4444;
    outline: none;
}

.button-group {
    display: flex;
    justify-content: flex-end;
    gap: 15px;
}

button {
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s;
}

button {
    background-color: #f1f1f1;
    color: #333;
}

button:hover {
    background-color: #e0e0e0;
}

button.save-button {
    background-color: #FF5722;
    color: white;
}

button.save-button:hover {
    background-color: #e64a19;
}
</style>
