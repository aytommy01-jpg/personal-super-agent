import { describe, expect, it } from "vitest";
import { TestDriver } from "testdriverai/vitest/hooks";

describe("Personal Super Agent Dashboard", () => {
  it("should display the dashboard and show active workflows and integrations", async (context) => {
    const testdriver = TestDriver(context);

    await testdriver.provision.chrome({ url: "https://aytommy01-jpg.github.io/personal-super-agent/" });

    const headerAssertResult = await testdriver.assert("The Fal Personal Super Agent title and integration stats are visible");
    expect(headerAssertResult).toBeTruthy();

    await testdriver.scroll("down", { amount: 400 });

    const workflowsAssertResult = await testdriver.assert("Workflows cards and status badges are visible");
    expect(workflowsAssertResult).toBeTruthy();

    await testdriver.scroll("down", { amount: 300 });

    const contentAssertResult = await testdriver.assert("Faith-Based Content section and footer with owner AYOTOMIWA are visible");
    expect(contentAssertResult).toBeTruthy();
  });
});
