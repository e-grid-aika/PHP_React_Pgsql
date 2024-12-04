import React, { useEffect, useState } from 'react';
import axios from 'axios';

// ユーザー型の定義
interface User{
  id: number;
  name: string;
  email: string;
}

// APIのレスポンス型の定義
interface ApiResponse{
  success: boolean;
  data: User[];
}

// ユーザー一覧表示コンポーネント
const UserInfo: React.FC = () => {
  // ユーザー一覧の状態を保持
  const [users, setUsers] = useState<User[]>([]);

  // ローディング状態
  const [loading, setLoading] = useState<boolean>(true);

  // エラーメッセージ
  const [error, setError] = useState<string | null>(null);

  // 初回レンダリング時にデータを取得
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // APIからユーザー一覧を取得
        const response = await axios.get<ApiResponse>('http://localhost:8000/api/users-info.php'); // PHPのエンドポイント
        if (response.data.success) {
          setUsers(response.data.data); // 成功したらユーザー一覧を保存
        } else {
          setError('データの取得に失敗しました。');
        }
      } catch (err) {
        setError('サーバーエラーが発生しました。');
      } finally {
        setLoading(false); // ローディング状態を解除
      }
    };

    fetchUsers();
  }, []);

  // ローディング中の表示
  if (loading) return <p>ロード中...</p>;

  // エラー発生時の表示
  if (error) return <p>{error}</p>;

  // ユーザー一覧の表示
  return (
    <div>
      <h1>ユーザー一覧</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>名前</th>
            <th>メールアドレス</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id.toString()}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserInfo;
