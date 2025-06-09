import React from "react";
import { Table, Avatar } from "react-daisyui";
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpeg";             


const DaisyTable: React.FC = () => {
  return (
    <div className="overflow-x-auto p-4">
      <Table className="w-full">
        <Table.Head>
          <span>#</span>
          <span>Name</span>
          <span>Job</span>
          <span>Favorite Color</span>
        </Table.Head>

        <Table.Body>
          <Table.Row>
            <span>1</span>
            <span className="flex items-center gap-3">
              <Avatar
                src={image1}
                shape="circle"
                size="xs"
                border
              />
              <span>Cy Ganderton</span>
            </span>
            <span>Quality Control Specialist</span>
            <span>
              <span className="badge badge-primary">Blue</span>
            </span>
          </Table.Row>

          <Table.Row>
            <span>2</span>
            <span className="flex items-center gap-3">
              <Avatar
                src={image2}
                shape="circle"
                size="xs"
                border
              />
              <span>Hart Hagerty</span>
            </span>
            <span>Desktop Support Technician</span>
            <span>
              <span className="badge badge-secondary">Purple</span>
            </span>
          </Table.Row>

          <Table.Row>
            <span>3</span>
            <span className="flex items-center gap-3">
              <Avatar
                src={image3}
                shape="circle"
                size="xs"
                border
              />
              <span>Brice Swyre</span>
            </span>
            <span>Tax Accountant</span>
            <span>
              <span className="badge badge-accent">Red</span>
            </span>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default DaisyTable;
