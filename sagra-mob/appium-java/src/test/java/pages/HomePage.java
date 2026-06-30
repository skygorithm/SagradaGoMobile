package pages;

import io.appium.java_client.AppiumBy;
import io.appium.java_client.android.AndroidDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

public class HomePage {
    private static final int STEP_PAUSE_MS = Integer.parseInt(
            System.getenv().getOrDefault("STEP_PAUSE_MS", "1500")
    );

    private final AndroidDriver driver;
    private final WebDriverWait wait;

    public HomePage(AndroidDriver driver) {
        this.driver = driver;
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(20));
    }

    public boolean isOnHomeScreen() {
        try {
            WebElement welcome = wait.until(ExpectedConditions.presenceOfElementLocated(
                    AppiumBy.accessibilityId("welcome-text")
            ));
            return welcome.isDisplayed();
        } catch (Exception e) {
            try {
                WebElement welcomeText = wait.until(ExpectedConditions.presenceOfElementLocated(
                        By.xpath("//*[contains(@text,'Welcome,')]")
                ));
                return welcomeText.isDisplayed();
            } catch (Exception ex) {
                return false;
            }
        }
    }

    public void verifyWelcomeMessage() {
        log("Checking welcome message...");
        WebElement welcome = wait.until(ExpectedConditions.visibilityOfElementLocated(
                AppiumBy.accessibilityId("welcome-text")
        ));
        String text = welcome.getText();
        log("Welcome text displayed: " + text);
        pause();
    }

    public void clickQuickAccessTab() {
        log("Tapping 'Quick Access' tab...");
        WebElement tab = wait.until(ExpectedConditions.elementToBeClickable(
                AppiumBy.accessibilityId("quick-access-tab")
        ));
        tab.click();
        pause();
    }

    public void clickUpcomingEventsTab() {
        log("Tapping 'Upcoming Events' tab...");
        WebElement tab = wait.until(ExpectedConditions.elementToBeClickable(
                AppiumBy.accessibilityId("upcoming-events-tab")
        ));
        tab.click();
        pause();
    }

    public void verifyShortcutDisplayed(String shortcutId) {
        log("Checking if shortcut '" + shortcutId + "' is displayed...");
        WebElement shortcut = wait.until(ExpectedConditions.visibilityOfElementLocated(
                AppiumBy.accessibilityId("shortcut-" + shortcutId)
        ));
        assert shortcut.isDisplayed();
        log("Shortcut '" + shortcutId + "' is displayed.");
    }

    public void clickShortcut(String shortcutId) {
        log("Tapping shortcut '" + shortcutId + "'...");
        WebElement shortcut = wait.until(ExpectedConditions.elementToBeClickable(
                AppiumBy.accessibilityId("shortcut-" + shortcutId)
        ));
        shortcut.click();
        pause(2000);
    }

    public void clickNotifications() {
        log("Tapping notifications button...");
        WebElement btn = wait.until(ExpectedConditions.elementToBeClickable(
                AppiumBy.accessibilityId("notifications-button")
        ));
        btn.click();
        pause(2000);
    }

    public void clickChatbot() {
        log("Tapping chatbot floating button...");
        WebElement btn = wait.until(ExpectedConditions.elementToBeClickable(
                AppiumBy.accessibilityId("chatbot-button")
        ));
        btn.click();
        pause(2000);
    }

    public void navigateToProfile() {
        log("Navigating to Profile screen via CustomNavbar...");
        WebElement profileTab = wait.until(ExpectedConditions.elementToBeClickable(
                AppiumBy.accessibilityId("navbar-profile")
        ));
        profileTab.click();
        pause(3000);
    }

    public void navigateToHome() {
        log("Navigating to Home screen via CustomNavbar...");
        WebElement homeTab = wait.until(ExpectedConditions.elementToBeClickable(
                AppiumBy.accessibilityId("navbar-home")
        ));
        homeTab.click();
        pause(2000);
    }

    private void log(String message) {
        System.out.println("[HomePage] " + message);
    }

    private void pause() {
        pause(STEP_PAUSE_MS);
    }

    private void pause(long millis) {
        try {
            Thread.sleep(millis);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            throw new RuntimeException(e);
        }
    }
}
