package pages;

import io.appium.java_client.AppiumBy;
import io.appium.java_client.android.AndroidDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ProfilePage {
    private static final int STEP_PAUSE_MS = Integer.parseInt(
            System.getenv().getOrDefault("STEP_PAUSE_MS", "1500")
    );

    private final AndroidDriver driver;
    private final WebDriverWait wait;

    public ProfilePage(AndroidDriver driver) {
        this.driver = driver;
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(20));
    }

    public boolean isOnProfileScreen() {
        try {
            WebElement fullName = wait.until(ExpectedConditions.presenceOfElementLocated(
                    AppiumBy.accessibilityId("profile-full-name")
            ));
            return fullName.isDisplayed();
        } catch (Exception e) {
            return false;
        }
    }

    public String getFullName() {
        WebElement fullName = wait.until(ExpectedConditions.visibilityOfElementLocated(
                AppiumBy.accessibilityId("profile-full-name")
        ));
        return fullName.getText();
    }

    public String getEmail() {
        WebElement emailText = wait.until(ExpectedConditions.visibilityOfElementLocated(
                AppiumBy.accessibilityId("profile-email-text")
        ));
        return emailText.getText();
    }

    public void clickEditProfile() {
        log("Tapping 'Edit Profile' button...");
        WebElement btn = wait.until(ExpectedConditions.elementToBeClickable(
                AppiumBy.accessibilityId("profile-edit-button")
        ));
        btn.click();
        pause();
    }

    public void clickSave() {
        log("Tapping 'Save' button...");
        WebElement btn = wait.until(ExpectedConditions.elementToBeClickable(
                AppiumBy.accessibilityId("profile-save-button")
        ));
        btn.click();
        pause(3000); // Allow save API request to complete
    }

    public void clickCancel() {
        log("Tapping 'Cancel' button...");
        WebElement btn = wait.until(ExpectedConditions.elementToBeClickable(
                AppiumBy.accessibilityId("profile-cancel-button")
        ));
        btn.click();
        pause();
    }

    public void fillFirstName(String firstName) {
        log("Entering First Name: " + firstName);
        WebElement field = wait.until(ExpectedConditions.presenceOfElementLocated(
                AppiumBy.accessibilityId("profile-first-name-input")
        ));
        setFieldText(field, firstName);
        pause();
    }

    public void fillMiddleName(String middleName) {
        log("Entering Middle Name: " + middleName);
        WebElement field = wait.until(ExpectedConditions.presenceOfElementLocated(
                AppiumBy.accessibilityId("profile-middle-name-input")
        ));
        setFieldText(field, middleName);
        pause();
    }

    public void fillLastName(String lastName) {
        log("Entering Last Name: " + lastName);
        WebElement field = wait.until(ExpectedConditions.presenceOfElementLocated(
                AppiumBy.accessibilityId("profile-last-name-input")
        ));
        setFieldText(field, lastName);
        pause();
    }

    public void fillContactNumber(String contact) {
        log("Entering Contact Number: " + contact);
        WebElement field = wait.until(ExpectedConditions.presenceOfElementLocated(
                AppiumBy.accessibilityId("profile-contact-input")
        ));
        setFieldText(field, contact);
        pause();
    }

    public String getFirstNameValue() {
        WebElement field = wait.until(ExpectedConditions.presenceOfElementLocated(
                AppiumBy.accessibilityId("profile-first-name-input")
        ));
        return field.getText();
    }

    public String getContactValue() {
        WebElement field = wait.until(ExpectedConditions.presenceOfElementLocated(
                AppiumBy.accessibilityId("profile-contact-input")
        ));
        return field.getText();
    }

    public void clickLogout() {
        log("Tapping Logout button...");
        WebElement btn = wait.until(ExpectedConditions.elementToBeClickable(
                AppiumBy.accessibilityId("profile-logout-button")
        ));
        btn.click();
        pause();
    }

    public void confirmLogout() {
        log("Confirming logout inside modal...");
        WebElement btn = wait.until(ExpectedConditions.elementToBeClickable(
                AppiumBy.accessibilityId("logout-confirm-button")
        ));
        btn.click();
        pause(3000);
    }

    public void cancelLogout() {
        log("Canceling logout inside modal...");
        WebElement btn = wait.until(ExpectedConditions.elementToBeClickable(
                AppiumBy.accessibilityId("logout-cancel-button")
        ));
        btn.click();
        pause();
    }

    public void dismissSaveAlert() {
        log("Dismissing profile save alert...");
        try {
            List<WebElement> okButtons = driver.findElements(
                    By.xpath("//*[@text='OK' or @content-desc='OK']")
            );
            for (WebElement ok : okButtons) {
                if (ok.isDisplayed()) {
                    ok.click();
                    pause();
                    return;
                }
            }
        } catch (Exception e) {
            log("Could not dismiss alert: " + e.getMessage());
        }
    }

    private void setFieldText(WebElement element, String text) {
        String elementId = ((RemoteWebElement) element).getId();
        Map<String, Object> args = new HashMap<>();
        args.put("elementId", elementId);
        args.put("text", text == null ? "" : text);
        driver.executeScript("mobile: replaceElementValue", args);
    }

    private void log(String message) {
        System.out.println("[ProfilePage] " + message);
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
