package tests;

import base.BaseTest;
import org.testng.Assert;
import org.testng.annotations.Test;
import pages.HomePage;
import pages.LoginPage;
import utils.EnvUtils;

public class HomeTest extends BaseTest {

    private static final String TEST_EMAIL = EnvUtils.get("TEST_EMAIL");
    private static final String TEST_PASSWORD = EnvUtils.get("TEST_PASSWORD");

    @Test
    public void testHomeScreenVerification() {
        LoginPage loginPage = new LoginPage(driver);
        HomePage homePage = new HomePage(driver);

        // Ensure we are logged in
        loginPage.restartApp();
        if (!homePage.isOnHomeScreen()) {
            loginPage.goToLoginScreen();
            if (!TEST_EMAIL.isEmpty() && !TEST_PASSWORD.isEmpty()) {
                loginPage.fillLoginForm(TEST_EMAIL, TEST_PASSWORD);
                loginPage.tapLogin();
                loginPage.assertLoginSuccess();
            } else {
                Assert.fail("Skipping home screen verification — TEST_EMAIL and TEST_PASSWORD are required but missing.");
            }
        }

        // Verify Home Screen elements
        Assert.assertTrue(homePage.isOnHomeScreen(), "Should be on the Home Screen");
        homePage.verifyWelcomeMessage();

        // Check tabs interaction
        homePage.clickUpcomingEventsTab();
        homePage.clickQuickAccessTab();

        // Check shortcuts are displayed
        homePage.verifyShortcutDisplayed("donation");
        homePage.verifyShortcutDisplayed("announcement");
        homePage.verifyShortcutDisplayed("virtualtour");

        System.out.println("[HomeTest] All homepage elements verified successfully.");
    }
}
