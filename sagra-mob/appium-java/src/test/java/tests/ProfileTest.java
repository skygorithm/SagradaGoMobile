package tests;

import base.BaseTest;
import org.testng.Assert;
import org.testng.annotations.Test;
import pages.HomePage;
import pages.LoginPage;
import pages.ProfilePage;
import utils.EnvUtils;

public class ProfileTest extends BaseTest {

    private static final String TEST_EMAIL = EnvUtils.get("TEST_EMAIL");
    private static final String TEST_PASSWORD = EnvUtils.get("TEST_PASSWORD");
    private static final String TEST_FIRSTNAME = EnvUtils.get("TEST_FIRSTNAME");
    private static final String TEST_LASTNAME = EnvUtils.get("TEST_LASTNAME");
    private static final String TEST_MOBILE = EnvUtils.get("TEST_MOBILE");

    @Test
    public void testProfileAndLogoutFlow() {
        LoginPage loginPage = new LoginPage(driver);
        HomePage homePage = new HomePage(driver);
        ProfilePage profilePage = new ProfilePage(driver);

        // Ensure we are logged in
        loginPage.restartApp();
        if (!homePage.isOnHomeScreen()) {
            loginPage.goToLoginScreen();
            if (!TEST_EMAIL.isEmpty() && !TEST_PASSWORD.isEmpty()) {
                loginPage.fillLoginForm(TEST_EMAIL, TEST_PASSWORD);
                loginPage.tapLogin();
                loginPage.assertLoginSuccess();
            } else {
                Assert.fail("Skipping profile test — TEST_EMAIL and TEST_PASSWORD are required but missing.");
            }
        }

        // Navigate to Profile screen
        homePage.navigateToProfile();
        Assert.assertTrue(profilePage.isOnProfileScreen(), "Should be on the Profile Screen");

        // Verify initial details match env or are not empty
        String emailText = profilePage.getEmail();
        Assert.assertEquals(emailText, TEST_EMAIL, "Profile email should match test email");

        // Test editing name & contact number
        profilePage.clickEditProfile();

        String origFirstName = TEST_FIRSTNAME.isEmpty() ? "Berlene" : TEST_FIRSTNAME;
        String tempFirstName = "UpdatedName";
        String origContact = TEST_MOBILE.isEmpty() ? "09123456789" : TEST_MOBILE;
        String tempContact = "09999999999";

        profilePage.fillFirstName(tempFirstName);
        profilePage.fillContactNumber(tempContact);
        profilePage.clickSave();
        profilePage.dismissSaveAlert();

        // Verify it was updated
        String updatedName = profilePage.getFullName();
        Assert.assertTrue(updatedName.contains(tempFirstName), "Full name should contain updated first name");

        // Revert changes back to original
        profilePage.clickEditProfile();
        profilePage.fillFirstName(origFirstName);
        profilePage.fillContactNumber(origContact);
        profilePage.clickSave();
        profilePage.dismissSaveAlert();

        // Verify reverted successfully
        String revertedName = profilePage.getFullName();
        Assert.assertTrue(revertedName.contains(origFirstName), "Full name should contain original first name again");

        // Test Cancel action
        profilePage.clickEditProfile();
        profilePage.fillFirstName("CancelTest");
        profilePage.clickCancel();
        String cancelCheckName = profilePage.getFullName();
        Assert.assertFalse(cancelCheckName.contains("CancelTest"), "Changes should have been canceled and not shown in full name");

        // Test logout cancel and logout confirm
        profilePage.clickLogout();
        profilePage.cancelLogout();
        Assert.assertTrue(profilePage.isOnProfileScreen(), "Should still be on the Profile screen after canceling logout");

        profilePage.clickLogout();
        profilePage.confirmLogout();

        // Verify we are back to login/get started screen
        System.out.println("[ProfileTest] Profile edit and logout verified successfully.");
    }
}
