import { Button, Popover, Space } from "antd";
import React from "react";
import { moreIcon } from "../../public/icons/icons";
import Link from "next/link";


type Props = {
    userName: string;
}

const content = (
  <div>
    <Link href="/posts/how-to-get-started-with-learning-turkish/edit">
      <Button
        type="text"
        className="!text-blue-600"
      >
        Edit
      </Button>
    </Link>
    <Button
      type="text"
      className="!text-red-500 hover:!text-red-600"
    >
      Delete
    </Button>
  </div>
);

const PostMenu: React.FC<Props> = ({ userName }) => {
    const content = (
        <div>
          <Link href={`/users/${userName}/update-post/how-to-get-started-with-learning-turkish`}>
            <Button
              type="text"
              className="!text-blue-600"
            >
              Edit
            </Button>
          </Link>
          <Button
            type="text"
            className="!text-red-500 hover:!text-red-600"
          >
            Delete
          </Button>
        </div>
      ); 
    return (
        
            <>
              <Space wrap>
                <Popover
                  content={content}
                  trigger="click"
                  className="cursor-pointer text-gray-500"
                >
                  {moreIcon}
                </Popover>
              </Space>
            </>
          
    )
}



export default PostMenu;
