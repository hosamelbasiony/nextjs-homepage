/// <reference types="cypress" />

const headings = [
    "تطبيق إدارة المختبرات",
    "بوابة نتائج المعامل الخارجية",
    "بوابة نتائج المرضى وما يتعلق بخدمة العميل",
    "الاندماج والتكامل مع نظام إدارة موارد المؤسسة"
];

context('Home Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/about')
    });

    headings.forEach(heading => {
        it("should find our welcome page and message", () => {
            cy.get("a").contains(heading);
        });
    });    

    // it("check the availability of the about headings", () => {
    //     cy.get("a>p").each((item, index) => {
    //         cy.wrap(item).should("contain.text", headings[index]);
    //     });
    // });
});