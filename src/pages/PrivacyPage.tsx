import Container from "components/_common/Container";
import H2 from "components/_common/H2";
import H3 from "components/_common/H3";
import { contactEmail } from "constants/constants";

const PrivacyPage = () => {
  return (
    <Container className="bg-white text-[#595959] min-h-screen">
      <h1 className="text-2xl font-bold text-center">PRIVACY POLICY</h1>
      <div className="text-sm text-[#595959] text-center mt-2">
        Last updated March 01, 2025
      </div>
      <div className="mt-10">
        <H2>SUMMARY OF KEY POINTS</H2>
        <p className="mt-4">
          This summary provides key points from our Privacy Notice, but you can
          find out more details about any of these topics by clicking the link
          following each key point or by using our table of contents below to
          find the section you are looking for.
        </p>
      </div>
      <div className="mt-6">
        <H3>What personal information do we process?</H3>
        <p>
          When you visit, use, or navigate our Services, we may process personal
          information depending on how you interact with us and the Services,
          the choices you make, and the products and features you use.
        </p>
      </div>
      <div className="mt-6">
        <H3>Do we process any sensitive personal information?</H3>
        <p>We do not process sensitive personal information.</p>
      </div>
      <div className="mt-6">
        <H3>How do we keep your information safe?</H3>
        <p>
          We have adequate organizational and technical processes and procedures
          in place to protect your personal information.
        </p>
      </div>
      <div className="mt-6">
        <p className="font-bold">Questions or concerns?</p>
        <p>
          If you have any questions or concerns, please contact us at{" "}
          <a href={contactEmail} className="text-[#3030F1] break-words">
            hello@include.agency
          </a>
        </p>
      </div>
    </Container>
  );
};

export default PrivacyPage;
